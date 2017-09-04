var ltb = {};

ltb.init = function() {

   
};

ltb.includeJS = function(cb) {
   var z, i, elmnt, file, xhttp;
   z = document.getElementsByTagName("*");
   for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("ltb-include-js");
      if (file) {
         xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            elmnt.innerHTML = this.responseText;
            elmnt.removeAttribute("ltb-include-js");
            w3.includeJS(cb);
         }
         }      
         xhttp.open("GET", file, true);
         xhttp.send();
         return;
      }
   }
   if (cb) cb();
};

ltb.init();