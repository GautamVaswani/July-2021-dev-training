// ------------------------------------Course----------------------------------------------------

// Load course data
let courseData = "/dashboard/data/course data.json";
document.addEventListener("DOMContentLoaded", function(event) { 
    fetch(courseData)
    .then(response => response.json())    
    .then(data => {

        let markupFullCourse = ``;
        
        for(var course of data){
            //document.getElementById("coursesGrid").innerHTML += markup;
            //console.log(course.id)
            
            let courseID = course.id;
            let courseImg = course.image;
            let courseTitle = course.title;
            let courseSubject = course.subject;
            let courseGrade = course.grade;
            let courseGradeUpto = course.gradeUpto;
            let courseUnits = course.units;
            let courseLessons = course.lessons;
            let courseTopics = course.topics;
            let courseClasses = course.classes;
            let courseStudents = course.students;
            let courseDateFrom = course.dateFrom;
            let courseDateTo = course.dateTo;
            let courseFavourite = course.favourite;
            let coursePreview = course.preview;
            let courseManageCourse = course.manageCourse;
            let courseGradeSubmission = course.gradeSubmission;
            let courseReport = course.report;
            let courseExpired = course.expired;

            // Course details div
            
            let favourite = ``;
            if(courseFavourite){
                favourite = `/quantum screen assets/icons/favourite.svg`;
            } else{
                favourite = `/quantum screen assets/icons/favouriteUnmarked.svg`;
            }


            let expired = ``;
            if(courseExpired){
                expired = `<div class="status">Expired</div>`;
            } else{
                expired = `<div class="status" style="display: none">Expired</div>`;
            }


            let row5 =``;
            // console.log(courseStudents, courseDateFrom, courseDateTo);
            if(courseStudents!=undefined && courseDateFrom != undefined){
                row5 = `<p><span class="studentCount">${courseStudents} Students</span>
                <span class="date"> | ${courseDateFrom} - ${courseDateTo}</span></p>`;                
            } else{
                if(courseStudents!= undefined && courseDateFrom == undefined){
                    row5 = `<p><span class="studentCount">${courseStudents} Students</span>
                    <span class="date" style="display: none"> | ${courseDateFrom} - ${courseDateTo}</span></p>`; 
                } else if(courseStudents= undefined && courseDateFrom != undefined){
                    row5 = `<p><span class="studentCount"  style="display: none">${courseStudents} Students</span>
                    <span class="date"> | ${courseDateFrom} - ${courseDateTo}</span></p>`;
                }
            }    
        

            let markupCourseDetails = `
            <div class="course">
            
                ${expired}
            
                <div class="courseDetails">
                    <div class="courseImage">
                        <img
                            class="image"
                            src="${courseImg}"
                            alt=""
                        />
                    </div>
                    
                    <div class="details">
                        <div class="row1">
                            <p>${courseTitle}</p>
                            <img
                            src="${favourite}" 
                            alt=""
                            tabindex="0"
                            />
                        </div>
                        <div class="row2">
                            <p>${courseSubject} | Grade ${courseGrade} <span>+${courseGradeUpto}</span></p>
                        </div>
                        <div class="row3">
                            <p>
                            <span>${courseUnits} </span> Units <span>${courseLessons}</span> Lessons
                            <span>${courseTopics}</span> Topics
                            </p>
                        </div>
                        <div class="row4">
                            <select name="sortType" id="sortType">
                            <option value="courseName">${courseClasses}</option>
                            <option value="o2">O2</option>
                            <option value="O3">O3</option>
                            <option value="O4">O4</option>
                            </select>
                        </div>
                        <div class="row5">
                            ${row5}
                        </div>
                    </div>
                </div>
            </div>
            `;
            



            // Manage course icons div 
            let preview;
            if(coursePreview){
                preview = `<img src="/quantum screen assets/icons/preview.svg" alt="" tabindex="0"/>`;
            } else{
                preview = `<img src="/quantum screen assets/icons/preview.svg" alt="" style="opacity: 0.5" tabindex="0"/>`;
            }

            let manageCourse;
            if(courseManageCourse){
                manageCourse = `<img src="/quantum screen assets/icons/manage course.svg" alt="" tabindex="0" />`;
            } else{
                manageCourse = 
                `<img src="/quantum screen assets/icons/manage course.svg" alt="" style="opacity: 0.5" tabindex="0"/>`;
            }


            let gradeSubmission;
            if(courseGradeSubmission){
                gradeSubmission = `<img
                src="/quantum screen assets/icons/grade submissions.svg"
                alt=""
                tabindex="0"
            />`
            } else{
                gradeSubmission = `<img
                src="/quantum screen assets/icons/grade submissions.svg"
                alt=""
                tabindex="0"
                style="opacity: 0.5"
            />`
            }

            let report;
            if(courseReport){
                report = `<img src="/quantum screen assets/icons/reports.svg" alt="" tabindex="0"/>`
            } else{
                report = `<img src="/quantum screen assets/icons/reports.svg" alt=""style="opacity:0.5" tabindex="0"/>`
            }


            let markupManageCourse = `<div class="manageCourse" id="manage${courseID}">
            ${preview}
            ${manageCourse}
            ${gradeSubmission}
            ${report}
            </div>`

            // Full course div markup
            markupFullCourse = `<div class="courseContainer" id="${courseID}" tabindex="0">
            ${markupCourseDetails}
            ${markupManageCourse}
            </div>`;

            document.getElementById("coursesGrid").innerHTML += markupFullCourse;
        }
    })
  });

// ------------------------------------Alert----------------------------------------------------

// Load alert data
let alertLoad = function(event){
    fetch(alertData)
    .then(response => response.json())    
    .then(data => {

        if (event.type == "keyup" && event.keyCode != 13){
            return;
        }


        let alertPreview = document.getElementsByClassName("alert-preview")[0];
        alertPreview.style.display = "flex";
        alertPreview.style.flexDirection = "column";
        alertPreview.style.position = "absolute";
        alertPreview.style.backgroundColor = "white";
        alertPreview.style.top = "60px";
        alertPreview.style.right = "0px";
        alertPreview.style.zIndex = "100";

        document.getElementById("alerts-container").innerHTML = ``;

        let i = -1;
        
        for(var alert of data){
            
            let alertID = alert.id;
            let alertMessage = alert.alertMessage;
            let alertImage = alert.image;
            let alertExtraDetails = alert.extraDetails;
            let alertDate = alert.date;

            
            let alertRow1 = ``;
            if(alertMessage != undefined){
                alertRow1 = `
                <div class="alert-row1">
                        <textarea
                          name="alert-message"
                          cols="34"
                          rows="2"
                          maxlength="40"
                          readonly
                          tabindex="-1"
                        >${alertMessage}</textarea
                        >
                        <img
                          src="${alertImage}"
                          alt=""
                        />
                </div>
                `;
            }
            else{
                alertRow1 = `
                <div class="alert-row1" style="display:none">
                        <textarea
                          name="alert-message"
                          cols="34"
                          rows="2"
                          maxlength="40"
                          readonly
                        >${alertMessage}</textarea
                        >
                        <img
                          src="${alertImage}"
                          alt=""
                        />
                </div>
                `;
            }

            let alertRow2 = ``;
            if(alertExtraDetails != undefined){
                alertRow2 = `
                <div class="alert-row2">
                    <p>${alertExtraDetails}</p>
                </div>
                `;
            }
            else{
                alertRow2 = `
                <div class="alert-row2" style="display: none">
                    <p>${alertExtraDetails}</p>
                </div>
                `;
            }

            let alertRow3 = ``;
            if(alertDate != undefined){
                alertRow3 = `
                    <div class="alert-row3">
                        <p>${alertDate}</p>
                    </div>
                `;
            }
            else{
                alertRow3 = `
                    <div class="alert-row3" style="display: none">
                        <p>${alertDate}</p>
                    </div>
                `;
            }

            let alertMarkup = `
            <div class="alerts ${alertID}" tabindex="${i}">
                  ${alertRow1}
                  ${alertRow2}
                  ${alertRow3}
            </div>
            `;

            document.getElementById("alerts-container").innerHTML += alertMarkup;

            if(i == -1){
                i += 11;
            }
            else{
                i += 1;
            }
        }

        

        if (event.type == "keyup" && event.keyCode === 13){
            document.querySelector(".alerts").focus();
        }

    })
}

// Hide data function
let hideAlertPreview =  function(event){
    let alertPreview = document.getElementsByClassName("alert-preview")[0];
    alertPreview.style.display = "none";

    let announcementIcon = document.querySelector(".announcements-div")
    announcementIcon.focus();
}

let alertData = "/dashboard/data/alert data.json";
let alertIcon = document.querySelector(".alert-div");

alertIcon.addEventListener("mouseenter", alertLoad);
alertIcon.addEventListener("mouseleave", hideAlertPreview);
alertIcon.addEventListener("keyup", alertLoad);

let alertShowButton = document.querySelector(".alert-show-button");
alertShowButton.addEventListener("focusout", hideAlertPreview);

// ------------------------------------Announcement----------------------------------------------------

// Load announcement data function
let announcementLoad =  function(event){
    fetch(announcementData)
    .then(response => response.json())    
    .then(data => {

        if (event.type == "keyup" && event.keyCode != 13){
            return;
        }

        let announcementPreview = document.getElementsByClassName("announcements-preview")[0];
        announcementPreview.style.display = "flex";
        announcementPreview.style.flexDirection = "column";
        announcementPreview.style.position = "absolute";
        announcementPreview.style.backgroundColor = "white";
        announcementPreview.style.top = "60px";
        announcementPreview.style.right = "0px";
        announcementPreview.style.zIndex = "100";

        document.getElementById("announcements-container").innerHTML = ``;

        let i = -1;
        
        for(var announcement of data){
            
            let announcementID = announcement.id;
            let announcementFrom = announcement.announcementFrom;
            let announcementImage = announcement.image;
            let announcementMessage = announcement.announcementMessage;
            let announcementExtraDetails = announcement.extraDetails;
            let announcementFiles = announcement.files;
            let announcementDate = announcement.date;

            

            // Row 1
            let announcementRow1 = `
            <div class="announcement-row1">
              <p><span>PA:</span> ${announcementFrom}</p>
              <img
                src="${announcementImage}"
                alt=""
              />
            </div>
            `;


            // Row 2
            let announcementRow2 = `
            <div class="announcement-row2">
              <textarea
                name="alert-message"
                cols="34"
                rows="2"
                maxlength="40"
                readonly
                tabindex="-1"
              >
${announcementMessage}
              </textarea>
            </div>
            `;

            // Row 3
            let announcementRow3 = ``;
            if(announcementExtraDetails != undefined){
                announcementRow3 = `
                <div class="announcement-row3">
                    <p>${announcementExtraDetails}</p>
                </div>`;
            }
            else{
                announcementRow3 = `
                <div class="announcement-row3" style="display: none;">
                    <p>${announcementExtraDetails}</p>
                </div>`;
            }


            // Row 4
            let attachment = ``;
            if(announcementFiles != undefined){
                attachment = `<p>&#128206; Files attached</p>`
            }
            else{
                attachment = `<p style="display: none;">&#128206; Files attached</p>`
            }

            let date = ``;
            if(announcementDate != undefined){
                date = `<p class="announcement-date">${announcementDate}</p>`
            }
            else{
                date = `<p class="announcement-date" style="display: none;">${announcementDate}</p>`
            }

            let announcementRow4 = `
            <div class="announcement-row4">
              ${attachment}
              ${date}
            </div>
            `;
            

            let announcementMarkup = `
            <div class="announcement ${announcementID}" tabindex="${i}">
                  ${announcementRow1}
                  ${announcementRow2}
                  ${announcementRow3}
                  ${announcementRow4}
            </div>
            `;

            document.getElementById("announcements-container").innerHTML += announcementMarkup;

            if(i == -1){
                i += 11;
            }
            else{
                i += 1;
            }
        }

        if (event.type == "keyup" && event.keyCode === 13){
            document.querySelector(".announcement").focus();
        }

    })
}

// Hide data
let hideAnnouncementPreview =  function(event){
    let announcementPreview = document.getElementsByClassName("announcements-preview")[0];
    announcementPreview.style.display = "none";

    let profileIcon = document.querySelector(".profile-div")
    profileIcon.focus();
}

let announcementData = "/dashboard/data/announcement data.json";
let announcementIcon = document.querySelector(".announcements-div");

announcementIcon.addEventListener("mouseenter", announcementLoad);
announcementIcon.addEventListener("mouseleave", hideAnnouncementPreview);
announcementIcon.addEventListener("keyup", announcementLoad);

// announcementIcon.addEventListener("focusin", announcementLoad);
// announcementIcon.addEventListener("", hideAnnouncementPreview);

let announcementCreateButton = document.querySelector(".announcements-create-button");
announcementCreateButton.addEventListener("focusout", hideAnnouncementPreview);

// ------------------------------------Modal----------------------------------------------------

// Open modal window 
function openModalWindow(event) {
    if (event.type == "keyup" && event.keyCode != 13){
        return;
    }
    let modal = document.querySelector("#myModal");
    modal.style.display = "block";
}

// Close the modal
let cancel = document.getElementsByClassName("close")[0];
cancel.onclick = function() {
    console.log("cancel function called!")
    let modal = document.querySelector("#myModal");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    let modal = document.querySelector("#myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//  Click and enter key event listner for menu list items
let menuList = document.querySelectorAll(".menu > ul > li");
menuList.forEach(menuItem => {
    menuItem.addEventListener("click", openModalWindow);
    menuItem.addEventListener("keyup", openModalWindow);
})

// 
let profileIcon = document.querySelector(".profile-div"); 
profileIcon.addEventListener("click", openModalWindow);
profileIcon.addEventListener("keyup", openModalWindow);