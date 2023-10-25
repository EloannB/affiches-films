fetch("data/movies.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data["results"])

        data.results.forEach(function (movie) {
            var div = document.createElement('div')


            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="affiches films">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movie.release_date} </p>
              <a href="#" class="btn btn-primary">Voir plus</a>
            </div>
          </div>

`
            document.body.appendChild(div)
        })
    })


