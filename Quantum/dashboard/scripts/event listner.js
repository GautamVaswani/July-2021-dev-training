let dropDown = document.querySelectorAll(".has-submenu");
console.log(dropDown)
dropDown.forEach(li => {
    li.addEventListener("mouseenter", function(event){
        event.target.children[1].src = "/quantum screen assets/icons/green-arrow-up.svg"; 
    });

    li.addEventListener("mouseleave", function(event){
        event.target.children[1].src = "/quantum screen assets/icons/green-arrow-down.svg"; 
    });

})

