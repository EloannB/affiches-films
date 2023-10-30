fetch("data/movies.json")
  .then(response => response.json())
  .then(data => {
    const movieList = document.querySelector(".movie-list")
    let index = 0
    data.results.forEach(function (movie) {

      const card = document.createElement('div')
      card.classList.add('card', 'col-lg-3', 'col-10', 'm-3')
      card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="affiches films">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.release_date}</p>
          <a href="movie.html?index=${index}" class="btn btn-secondary view-more">Voir Plus</a>
        </div>
      `

      movieList.appendChild(card)
      index++
    })
  })


