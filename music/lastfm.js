lastfm = {
   api:{
      root:"https://ws.audioscrobbler.com/2.0/",
      key:"8ab8b0ca70572c76d43c85fb498e71e9"
   },
   user:"liamtbrand"
}

function linkify(target,url) {
    var linkable = document.createElement('a');
    linkable.href = url;
    linkable.target = "_blank";
    linkable.style = "display:block;width:100%;height:100%;";
    target.appendChild( linkable );
}

function updateCurrentlyListening() {
    var url = lastfm.api.root+"?method=user.getrecenttracks&user="+lastfm.user+"&api_key="+lastfm.api.key+"&format=json";
    $.getJSON( url, function( data ) {
        //console.log(data);
        var last_track = data.recenttracks.track[0];
        //console.log(last_track);
        var text = "";
        if( last_track['@attr'] && last_track['@attr'].nowplaying ) {
            text = "I'm currently listening to:";
        } else {
            text = "I last listened to:";
        }
        document.getElementById("listening-text").innerHTML = text;

        // add album art...
        var albumart = document.getElementById("listening-albumart");
        // pick largest image (assume ordered).
        var imgurl = last_track.image[last_track.image.length-1]["#text"];
        var style = "";
        if( imgurl.length ) {
           style += "background-image: url('"+imgurl+"');";
        }
        albumart.style = style;

        linkify( albumart, last_track.url );

        // add album info...
        var albumdetails = document.getElementById("listening-details");

        albumdetails.innerHTML = last_track.name+"<br />"+last_track.album['#text']+"<br />"+last_track.artist['#text'];
    });
}

function populateMusicBoard() {
   var url = lastfm.api.root+"?method=user.getweeklyalbumchart&user="+lastfm.user+"&api_key="+lastfm.api.key+"&format=json";
   $.getJSON(url,function(data) {
      //console.log(data);
      for(id in data.weeklyalbumchart.album) {
         album = data.weeklyalbumchart.album[id];
         //console.log(album);
         var url = lastfm.api.root+"?method=album.getinfo"+
                  "&artist="+album.artist["#text"]+
                  "&album="+album.name+
                  "&user="+lastfm.user+
                  "&api_key="+lastfm.api.key+
                  "&format=json";
         $.getJSON(url,function(albumdata) {
            console.log(albumdata);
            var node = document.createElement('div');
            document.getElementById("content").appendChild(node);
            node.className = "album-cover";
            node.innerHTML = "";
            var imgurl = albumdata.album.image[albumdata.album.image.length-1]["#text"];
            var style = "";
            if(imgurl.length) {
               style = "background-image: url('"+imgurl+"');";
            }
            style = style + "margin: " + Math.floor(Math.random() * 20) + "px;";
            node.style = style;

            linkify( node,albumdata.album.url );

            $(document).mousemove(function(e) {
               //var distance = Math.floor(Math.sqrt(Math.pow(e.pageX - (node.offsetLeft+(node.width/2)), 2) + Math.pow(e.pageY - (node.offsetTop+(node.height/2)), 2)));
               var rect = node.getBoundingClientRect();
               var distance = Math.floor(Math.sqrt(Math.pow(e.clientX - (rect.left+(rect.width/2)),2) + Math.pow(e.clientY - (rect.top+(rect.height/2)),2)));
               if(distance == 0) {
                  distance = 1;
               }
               var percent = Math.pow(distance/30,2);
               if(percent > 1) {
                  node.style = style+"filter: grayscale("+percent+"%);";
               }
            });

         });
      }
   });
}
