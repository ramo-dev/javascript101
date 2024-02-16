let randomMoviesBtn = document.getElementById("random-movies-btn"); // Define the randomMoviesBtn variable
let result = document.getElementById("result");

randomMoviesBtn.addEventListener("click", () => {
    fetchRandomMovies();
});

function fetchRandomMovies() {
    // Fetch random movies from TMDb API
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Extract random movies from the response
            const movies = data.results;
            displayRandomMovies(movies);
        })
        .catch(error => {
            console.error('Error fetching random movies:', error);
        });
}

function displayRandomMovies(movies) {
    // Clear previous results
    result.innerHTML = "";

    // Display each random movie
    movies.forEach(movie => {
        const movieDiv = createMovieDiv(movie);
        result.appendChild(movieDiv);
    });
}

function createMovieDiv(movie) {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    movieDiv.innerHTML = `
        <div class="info">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="poster">
            <div>
                <h2>${movie.title}</h2>
                <div class="rating">
                    <img src="star-icon.svg">
                    <h4>${movie.vote_average}</h4>
                </div>
                <div class="details">
                    <span>Rated: ${movie.adult ? 'Adult' : 'General'}</span>
                    <span>Release Date: ${movie.release_date}</span>
                    <span>Runtime: ${movie.runtime} mins</span>
                </div>
                <div class="genre">
                    <div>${movie.genre_ids.join(", ")}</div>
                </div>
            </div>
        </div>
        <h3>Overview:</h3>
        <p>${movie.overview}</p>
    `;

    return movieDiv;
}
