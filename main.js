
// 1. First select and store the elements you'll be working with
let player = document.getElementById('music-player');
let button = document.getElementById('music-search');
let criteria = document.getElementById('search');

button.addEventListener('click',function(event) {
   let search = criteria.value;
   fetch("https://api.soundcloud.com/tracks/?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=" + search)
   .then(function(response, reject) {
      response.json().then(function(data) {
         let artist = data;
         let criteria = document.querySelector('.results');

         criteria.innerHTML = '';
         for(let i = 0; i < artist.length; i++) {
            let contentSection = document.createElement("div");
            let artistName = document.createElement("p");
            let title = document.createElement("p");
            let albumArt = document.createElement("img");

            artistName.setAttribute("class", "artist");
            title.setAttribute("class", "song_title");
            contentSection.setAttribute("class", "col-md-3 col-md-4");
            albumArt.setAttribute("class", "img-responsive");


            contentSection.appendChild(albumArt);
            contentSection.appendChild(title);
            contentSection.appendChild(artistName);

            albumArt.src += artist[i].artwork_url;
            title.innerHTML += artist[i].title;
            artistName.innerHTML += artist[i].user.username;

            criteria.appendChild(contentSection);

            albumArt.addEventListener('click', function(event) {
               player.src = artist[i].stream_url + "?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f";
            });
         }
      });
   });
});
