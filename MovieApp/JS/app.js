

const main = document.querySelector('.main')
const API_KEY = "2d5212502054a5bd163034b25b957ce0"
const APIURL = "https://api.themoviedb.org/3/movie/popular?api_key="+API_KEY+"&language=en-US&page=1"
const UPCOMINGURL = "https://api.themoviedb.org/3/movie/upcoming?api_key="+API_KEY+"&language=en-US&page=1"
const TOPRATEDURL = "https://api.themoviedb.org/3/movie/top_rated?api_key="+API_KEY+"&language=en-US&page=1"
const NOWPLAYINGURL = "https://api.themoviedb.org/3/movie/now_playing?api_key="+API_KEY+"&language=en-US&page=1"
const SEARCHURL = "https://api.themoviedb.org/3/search/movie?&api_key="+API_KEY+"&query="
const TVURL = "https://api.themoviedb.org/3/tv/popular?api_key="+API_KEY+">&language=en-US&page=1"
const moviePoster = 'https://image.tmdb.org/t/p/w1280'
const nowPlaying = document.querySelector('.nowPlaying')
const topRated = document.querySelector('.topRated')
const popular = document.querySelector('.popular')
const upcoming = document.querySelector('.upcoming')
const tv = document.querySelector('.tv')
let poster = document.querySelectorAll('.movie-poster')
const exit = document.querySelector('.fa-times')
const overviewContainer = document.querySelector('.overview-container')
const magnify = document.getElementById('magnify')
const clear = document.getElementById('clear')

const form = document.getElementById('form')
const search = document.getElementById("search")


async function getMovies(url) {

    const response = await fetch(url)
    const respData = await response.json()

    console.log(respData)

    showMovies(respData.results)
  
}

function showMovies(movies){
    main.innerHTML = ""

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview} = movie
        const movieEl = document.createElement("div")

        movieEl.classList.add("movie")

        movieEl.innerHTML = `<img class="movie-poster" src="${moviePoster + poster_path}" alt="${title}">
        <div class="movie-details">
          <h3 class="movie-title">${title}</h3>
          <span class="${classifyRating(vote_average)}">${vote_average}</span>
          <div class="movie-overview">${overview}</div>
          </div>`

        main.append(movieEl)
       

        document.addEventListener('click', function(e) {
            if(e.target && e.target.id== 'movieEl') {
                console.log('it works!')
            }
        })

     
           
    })
}

getMovies(APIURL)

upcoming.addEventListener('click', function() {
    getMovies(UPCOMINGURL)
    gsap.from('main', {opacity: 0, duration: 1.4, y: -50})
   
})

nowPlaying.addEventListener('click', function() {
    getMovies(NOWPLAYINGURL)
    gsap.from('main', {opacity: 0, duration: 1.4, y: -50})
})

topRated.addEventListener('click', function() {
    getMovies(TOPRATEDURL)
    gsap.from('main', {opacity: 0, duration: 1.4, y: -50})
})

popular.addEventListener('click', function(){
    getMovies(APIURL)
    gsap.from('main', {opacity: 0, duration: 1.4, y: -50})
})

tv.addEventListener('click', function() {
    getMovies(TVURL)
})


function classifyRating(vote) {
   if (vote >= 7.5){
       return "green"
   } else if ( vote > 4){
       return "amber"
   } else {
       return "red"
   }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchQuery = search.value
    console.log(searchQuery)

    if(searchQuery) {
        getMovies(SEARCHURL + searchQuery)
        search.value
    }

})
search.addEventListener('click', function() {
   if(document.activeElement == search){
    magnify.classList.add('hide')
    clear.classList.add('show')
   } else {
       magnify.classList.remove('hide')
       clear.classList.remove('show')
   }

})

clear.addEventListener('click', function() {
    search.value = ''
    getMovies(APIURL)
})

search.addEventListener('click', function() {
    search.classList.toggle('extend')
})


