-- Add new location stored procedure
-- CREATE PROCEDURE `AddNewWalkinLocation`(
-- 	IN companyName VARCHAR(45),
--     IN address VARCHAR(100),
--     IN city VARCHAR(45),
--     IN pincode INT(6),
--     IN phoneCode VARCHAR(3),
--     IN phoneNumber BIGINT(10)
-- )
-- BEGIN
-- 	insert into walkin_location_details (company_name, address, city, pin_code, phone_code, phone_number)
-- 	values (companyName, address, city, pincode, phoneCode, phoneNumber);
-- END

-- Insert new location
call AddNewWalkinLocation(
	"Zeus Learning Pvt. Ltd.", 
    "1402, Tower B, Peninsula Business Park, Ganapatrao Kadam Marg, Lower Parel(W)",
	"Mumbai",
    400013,
    "+91",
    2266600000
);

insert into walkin_location_details (company_name, address, city, pin_code, phone_code, phone_number)
	values ("Zeus Learning Pvt. Ltd.",
			"1402, Tower B, Peninsula Business Park, Ganapatrao Kadam Marg, Lower Parel(W)",
            "Mumbai",
			400013,
			"+91",
			2266600000);

-- Add new job role stored procedure
-- CREATE PROCEDURE `AddNewJobRole`(
-- 	IN roleName VARCHAR(45),
--     IN package INT,
--     IN roleDesciption VARCHAR(255),
--     IN requirements VARCHAR(255)
-- )
-- BEGIN
-- 	insert into job_roles (role_name, package, role_description, requirements)
-- 	values (roleName, package, roleDesciption, requirements);
-- END

-- Insert in job role 
call AddNewJobRole(
	"Software Engineer", 
    600000,
	"We have a two-year indemnity for permanent candidates. We will provide training to the selected candidates.",
    "Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes."
);

call AddNewJobRole(
	"Instructional Designer", 
    600000,
	"We have a two-year indemnity for permanent candidates. We will provide training to the selected candidates.",
    "Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes."
);

call AddNewJobRole(
	"Software Quality Engineer", 
    600000,
	"We have a two-year indemnity for permanent candidates. We will provide training to the selected candidates.",
    "Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes."
);

 
-- Add new job stored procedure ( requires location id to be fetched from walkin_location_details )
-- CREATE PROCEDURE `AddNewJob`(
-- 	IN jobName VARCHAR(45),
--     IN startDate DATE,
--     IN endDate DATE,
--     IN expiresOn DATE,
--     IN specialOpportunity BIT(1),
--     IN locationId INT
-- )
-- BEGIN
-- 	insert into jobs 
-- 		(job_name, start_date, end_date, expires_on, special_opportunity, walkin_location_details_id)
-- 	values 
-- 		(jobName, startDate, endDate, expiresOn, specialOpportunity, locationId);
-- END

-- Insert new job
call AddNewJob(
	"Walk in for Designer Job Role", 
    "2021-07-10", -- start date 
	"2021-07-11",  -- end date 
    "2021-07-08", -- expires on
    0, -- Special opportunity
    1 -- location id
);

call AddNewJob(
	"Walk in for Multiple Job Role", 
    "2021-07-03", -- start date 
	"2021-07-04",  -- end date 
    NULL, -- expires on
    1, -- Special opportunity
    1 -- location id
);
 
 call AddNewJob(
	"Walk in for Design and Development Job Role", 
    "2021-07-10", -- start date 
	"2021-07-11",  -- end date 
    NULL, -- expires on
    0, -- Special opportunity
    1 -- location id
);

-- Fetch role id from job_roles ( requires role_name to be passed )
-- CREATE DEFINER=`root`@`localhost` PROCEDURE `fetchRoleId`(
-- 	IN roleName VARCHAR(45),
-- 	OUT roleId INT
-- )
-- BEGIN
-- 	Select id Into roleId From job_roles Where role_name = roleName;
-- END


-- Add job role of job stored procedure ( requires job role id to be fetched from job_roles )
-- CREATE PROCEDURE `AddJobRoleToJob`(
-- 	IN jobId INT,
--     IN roleName VARCHAR(45)
-- )
-- BEGIN 
-- 	DECLARE roleId INT;
--     call fetchRoleId(roleName, @roleId);
--     Set roleId = @roleId;
--     insert into job_has_job_roles 
-- 		(job_id, job_roles_id)
-- 	values 
-- 		(jobId, roleId);
-- END
call AddJobRoleToJob(1, "Software Engineer");
call AddJobRoleToJob(1, "Instructional Designer"); 
call AddJobRoleToJob(1, "Software Quality Engineer"); 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
-- time format
SELECT 
    name,
    TIME_FORMAT(start_at, '%h:%i %p') start_at,
    TIME_FORMAT(end_at, '%h:%i %p') end_at
FROM
    tests;