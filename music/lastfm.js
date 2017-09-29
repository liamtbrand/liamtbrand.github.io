lastfm = {
   api:{
      root:"http://ws.audioscrobbler.com/2.0/",
      key:"8ab8b0ca70572c76d43c85fb498e71e9"
   },
   user:"liamtbrand"
}

function populateMusicBoard() {
   var url = lastfm.api.root+"?method=user.getweeklyalbumchart&user="+lastfm.user+"&api_key="+lastfm.api.key+"&format=json";
   $.getJSON(url,function(data) {
      console.log(data);
      for(id in data.weeklyalbumchart.album) {
         album = data.weeklyalbumchart.album[id];
         console.log(album);
         var url = lastfm.api.root+"?method=album.getinfo"+
                  "&artist="+album.artist["#text"]+
                  "&album="+album.name+
                  "&user="+lastfm.user+
                  "&api_key="+lastfm.api.key+
                  "&format=json";
         $.getJSON(url,function(album) {
            console.log(album);
            var node = document.createElement('div');
            document.getElementById("content").appendChild(node);
            node.className = "album-cover";
            node.innerHTML = "";
            var imgurl = album.album.image[2]["#text"];
            var style = "";
            if(!imgurl.length) {
               style = "background-color: #fff;";
            } else {
               style = "background-image: url('"+imgurl+"');";
            }
            node.style = style;
            
            $(document).mousemove(function(e) {
               //var distance = Math.floor(Math.sqrt(Math.pow(e.pageX - (node.offsetLeft+(node.width/2)), 2) + Math.pow(e.pageY - (node.offsetTop+(node.height/2)), 2)));
               var rect = node.getBoundingClientRect();
               var distance = Math.floor(Math.sqrt(Math.pow(e.clientX - (rect.left+(rect.width/2)),2) + Math.pow(e.clientY - (rect.top+(rect.height/2)),2)));
               if(distance == 0) {
                  distance = 1;
               }
               var percent = Math.pow(distance/20,2);
               if(percent > 1) {
                  node.style = style+"filter: grayscale("+percent+"%);";
               }
            });

         });
      }
   });
}