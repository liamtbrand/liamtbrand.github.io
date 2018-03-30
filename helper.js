
/**
 * We want to open all local links in same tab.
 * When we open an external link, it should be opened in a new tab.
**/
document.onclick = function (e) {
  e = e ||  window.event;
  var element = e.target || e.srcElement;

  if (element.tagName == 'A') {
    //console.log("nav: "+element.href);
    if(
         !element.href.startsWith('https://liamtbrand.com/')
      && !element.href.startsWith('http://localhost')
    ) {
      var win = window.open(element.href, '_blank');
      win.focus();
      return false; // prevent default action and stop event propagation
    }
    return true; // continue normal processing..
  }
};
