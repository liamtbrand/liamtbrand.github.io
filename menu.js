var initMenu = function (){
   var tmp = window.location.pathname.split("/");
   var page = tmp[tmp.length-2].split("/")[0];
   //$("nav #"+page).addClass("active");
   if(page) {
      document.getElementById(page).classList.add("active");
   }
};