fetch("data/movies.json")
  .then(response => response.json())
  .then(data => {
    const movieList = document.querySelector(".movie-list");

    data.results.forEach(function (movie) {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="affiches films">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.release_date}</p>
          <a href="movie.html?id=${movie.id}" class="btn btn-secondary view-more">Voir Plus</a>
        </div>
      `;

      movieList.appendChild(card);
    });

    // Ajouter un événement de clic aux boutons "Voir Plus"
    const viewMoreButtons = document.querySelectorAll('.view-more');
    viewMoreButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        // Empêcher le lien par défaut pour rester sur la même page
        e.preventDefault();
        
        // Récupérer l'ID du film depuis l'attribut "href"
        const movieId = this.getAttribute('href').split('=')[1];

        // Rediriger vers la page "movie.html" avec l'ID du film
        window.location.href = `movie.html?id=${movieId}`;
      });
    });
  });


