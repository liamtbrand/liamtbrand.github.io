---
layout: empty
title: Music
permalink: music/
---
<link rel="stylesheet" type="text/css" href="/music/style.css">

<div class="content">
<center>
<br />
<div class="music-caption">Music</div>
<div class="title">What I listened to this week</div>
<br />
<div class="album-display" id="content"></div>
</center>
</div>

<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="/music/lastfm.js"></script>
<script>
   (function(){
       populateMusicBoard();
   })();
</script>
