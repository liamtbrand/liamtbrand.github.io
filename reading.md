---
layout: page
title: Reading
permalink: reading/
---
<link rel="stylesheet" type="text/css" href="/literature/literature.css">

The following is a list of books I have read. As you can see I haven't been doing enough reading. Therefore, I have set myself a new goal of reading at least 1 page every day.
<div id='sections'></div>

<script>

var quotes = {
   title:"Quotes",
   entries:[
      {title:"The elevator to success is out of order,<br>You’ll have to use the stairs... one step at a time.",author:"Joe Girard"},
      {title:"Two roads diverged in a wood, and –<br>I took the one less traveled by,<br>And that has made all the difference.",author:"Robert Frost"},
      {title:"The best time to plant a tree was 20 years ago.<br>The next best time is now.",author:"Chinese Proverb"},
      {title:"<div class='highlighted'>&nbsp;Among all human discoveries,&nbsp;<br>&nbsp;the discovery of the mistake is the most important one.&nbsp;</div>",author:"Stanislaw Lec"},
      {title:"I’m not telling you it is going to be easy.<br>I’m telling you it’s going to be worth it.",author:"Art Williams"},
      {title:"Wenn nicht in diesem Leben, wann dann.",author:"Unknown"}
   ]
};

var sections = [
  {
    title:"October 2022",
    entries:[
      {title:"What's the economy for, anyway?", author:"John de Graaf", highlighted:true}
    ]
  },
  {
    title:"August 2019",
    entries:[
      {title:"Sapiens",author:"Yuval Noah Harari"}
    ]
  },
  {
    title:"July 2019",
    entries:[
      {title:"Digital Fortress",author:"Dan Brown"}
    ]
  },
  {
    title:"June 2019",
    entries:[
      {title:"The Symposium",author:"Plato"}
    ]
  },
  {
    title:"2018",
    entries:[
      {title:"Der Fledermausmann",author:"Jo Nesbø"}
    ]
  },
  {
    title:"2017",
    entries:[
      {title:"De man van Levkas",author:"Hammond Innes"}
    ]
  },
  {
    title:"2016",
    entries:[
      {title:"Café in Berlin",author:"André Klein"},
      /*{title:"How to Win Friends and Influence People",author:"Dale Carnegie"},*/
      {title:"The Kite Runner",author:"Khaled Hosseini"},
      {title:"The Girl on the Train",author:"Paula Hawkins"}
    ]
  }
];

buildSection = function(section) {
   var html = "";

   html += '<div class="section-title">'+section.title+'</div><table><tbody>';

   for(var i = 0; i < section.entries.length; i++) {

      var book = section.entries[i];

      html += '<tr class="book"><td class="title bold">';
      if('highlighted' in book) {
        html+= "<div class='highlighted'>&nbsp;";
      }
      html += book.title
      if('highlighted' in book) {
        html += "&nbsp;</div>";
      }
      html += '</td><td class="author">';
      html += book.author + '</td></tr>';
   }

   html += '</tbody></table>';

   return html;
};

(function(){

  html = "";
  for(var i = 0; i < sections.length; ++i) {
    html += "<div>";
    html += buildSection(sections[i]);
    html += "</div><div class='spacer em2'></div>";
  }
  document.getElementById('sections').innerHTML = html;

})();
</script>
