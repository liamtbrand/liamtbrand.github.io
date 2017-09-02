var initMenu = function (){
   var tmp = window.location.pathname.split("/");
   var page = tmp[tmp.length-1].split(".")[0];
   //$("nav #"+page).addClass("active");
   document.getElementById(page).classList.add("active");
};