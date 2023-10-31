const movieList = document.querySelector(".movie-list")
const carouselNew = document.querySelector("#carouselNew")

document.getElementById('btnSearch').addEventListener('click', function () {

  movieList.innerHTML = ""
  carouselNew.innerHTML = ""






  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
    }
  };

  let movieSearch = document.querySelector('#inputMovie').value

  fetch(`https://api.themoviedb.org/3/search/movie?query=${movieSearch}&include_adult=false&language=fr-FR&page=1`, options)
    .then(response => response.json())
    .then(data => {

      let index = 0
      data.results.forEach(function (movie) {

        const card = document.createElement('div')
        card.classList.add('card', 'col-lg-3', 'col-10', 'm-3')


        card.innerHTML = `
    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="affiches films">
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      <p class="card-text">${movie.release_date}</p>
      <a href="movie.html?id=${movie.id}" class="btn btn-secondary view-more">Voir Plus</a>
    </div>
  `

        movieList.appendChild(card)
        index++
      })
    })

})

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTRkYzEzNTcyNjkwZWNhYjAxODk3MTJiMzFjNzc1YSIsInN1YiI6IjY1NDBiMjc2MzU4MThmMDBlMzkyMWRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PepigEJGzCdele1-_m6hosuciDxUByePLeqhOhYCny4'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1', options)
  .then(response => response.json())
  .then(data => {

    let index = 0
    data.results.forEach(function (movie) {



      const carouselItem = document.createElement('div')
      carouselItem.innerHTML = `
      <div class="carousel-item ${index == 0 ? "active" : ""}">
      <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="d-block w-100" alt="...">
      <div id="backText" class="carousel-caption d-none d-md-block">
      <h5>${movie.title}</h5>
      <p>Nouveautés</p>
    </div>
    </div>
      
  
      `
      carouselNew.appendChild(carouselItem)
      index++
    })
  })


document.getElementById('navPop').addEventListener('click', function () {

  carouselNew.innerHTML = ""


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTRkYzEzNTcyNjkwZWNhYjAxODk3MTJiMzFjNzc1YSIsInN1YiI6IjY1NDBiMjc2MzU4MThmMDBlMzkyMWRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PepigEJGzCdele1-_m6hosuciDxUByePLeqhOhYCny4'
    }
  };

 
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {

      let index = 0
      data.results.forEach(function (movie) {



        const carouselItem = document.createElement('div')
        carouselItem.innerHTML = `
      <div class="carousel-item ${index == 0 ? "active" : ""}">
      <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="d-block w-100" alt="...">
      <div id="backText" class="carousel-caption d-none d-md-block">
      <h5>${movie.title}</h5>
      <p>Populaires</p>
    </div>
    </div>
      
  
      `
        carouselNew.appendChild(carouselItem)
        index++
      })
    })
  })