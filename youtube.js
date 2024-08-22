window.onload = function(){
var menuIcon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var maincontainer = document.querySelector(".maincontainer")
var card = document.getElementsByClassName("card")
console.log("menuIcon", menuIcon);

menuIcon.onclick = function() {
    sidebar.classList.toggle("smaller-sidebar")
    maincontainer.classList.toggle("larger-maincontainer")
    card.classList.toggle("larger-card")
};
    console.log("menu icon clicked");

};
