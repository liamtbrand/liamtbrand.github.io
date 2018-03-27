---
layout: empty
title: Music
permalink: music/
---
<link rel="stylesheet" type="text/css" href="/music/style.css">

<div class="content">
  <center>
  <div class="info-box">

    <div class="music-caption">Music</div>
    <div class="title" id="listening-text"></div>
    <br />
    <div class="current-album">
      <div class="current-album-cover" id="listening-albumart"></div>
      <div class="album-details" id="listening-details"></div>
    </div>
    <div class="album-display" id="listening-content"></div>
  </div>
  <br />
  <div class="title">This week, I listend to ...</div>
  <div class="album-display" id="content"></div>
  </center>
</div>

<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="/music/lastfm.js"></script>
<script>
   (function(){
       populateMusicBoard();
       updateCurrentlyListening();
       setInterval( updateCurrentlyListening, 5000 );
   })();
</script>
