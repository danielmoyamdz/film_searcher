const apiKey = "d7074696";
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultsContainer = document.getElementById("results");
const typeFilter = document.getElementById("typeFilter");
const yearFilter = document.getElementById("yearFilter");

searchButton.addEventListener("click", searchMovies);

async function searchMovies() {
    const query = searchInput.value.trim();
    const type = typeFilter.value;
    const year = yearFilter.value;

    if (!query) return;

    let url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;
    if (type) url += `&type=${type}`;
    if (year) url += `&y=${year}`;

    const res = await fetch(url);
    const data = await res.json();

    resultsContainer.innerHTML = "";

    if (data.Response === "True") {
        const movies = data.Search;

        // Para cada resultado, obtenemos más detalles
        for (const movie of movies) {
            const detailRes = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`);
            const detail = await detailRes.json();

            const card = document.createElement("div");
            card.classList.add("movie-card");

            card.innerHTML = `
        <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="${movie.Title}" />
        <h3>${movie.Title}</h3>
        <p><strong>Año:</strong> ${movie.Year}</p>
        <p><strong>Tipo:</strong> ${movie.Type}</p>
        <p><strong>⭐ IMDb:</strong> ${detail.imdbRating}/10</p>
      `;

            resultsContainer.appendChild(card);
        }
    } else {
        resultsContainer.innerHTML = `<p>No se encontraron resultados.</p>`;
    }
}
