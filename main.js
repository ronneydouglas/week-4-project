
// 1. First select and store the elements you'll be working with
let audioPlayer = document.querySelector(".music-player");
let form = document.querySelector(".search-form");


// 2. Create your `onSubmit` event for getting the user's search term
form.onsubmit = function onSubmit() {
  console.log(form.search.value);
  event.preventDefault();
  searchSoundCloud(form.search.value);
};

// 3. Create your `fetch` request that is called after a submission
function searchSoundCloud(title){
  fetch("http://api.soundcloud.com/tracks/?client_id=8538a1744a7fdaa59981232897501e04&q=" + title)
  .then(function(response){
    response.json().then(function(data){
      console.log(data); soundcloud(data);
    })
  })
}

// 4. Create a way to append the fetch results to your page
function soundcloud(data) {
  let title = document.querySelector("#title");
  title.innerHTML = data.soundcloud.tracks.title;
}

// 5. Create a way to listen for a click that will play the song in the audio play
