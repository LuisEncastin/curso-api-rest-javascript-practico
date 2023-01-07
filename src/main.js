const baseURL = 'https://api.themoviedb.org/3/'
const URL_API = 'https://api.themoviedb.org/3/trending/movie/day';
const URL_IMG = 'https://image.tmdb.org/t/p/w300'
const URL_GENRES = 'genre/movie/list'

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
  });

const getTrendingMoviesPreview = async(URL_API) => {
    const { data } = await api(URL_API);
    const movies = await data.results;

    const nodosMovies = movies.map(movie => {
        const divMovieContainer = document.createElement('DIV');
        divMovieContainer.className = 'movie-container';

        const imgMovieContainer = document.createElement('IMG');
        imgMovieContainer.className = 'movie-img';
        imgMovieContainer.setAttribute('alt', 'original_title');
        imgMovieContainer.setAttribute('src',  URL_IMG+movie.poster_path);
        divMovieContainer.appendChild(imgMovieContainer);
    
        return divMovieContainer;
    });

    const trendingPreviewMovieList = document.querySelector('#trendingPreview .trendingPreview-movieList');
    trendingPreviewMovieList.innerHTML = ""
    trendingPreviewMovieList.append(...nodosMovies);
}

async function getMoviesCategories(URL_GENRES){    
    const { data } = await api(URL_GENRES);
    const categories=data.genres;
    categoriesPreviewList.innerHTML = "";

    categories.forEach(category => {     
        const categoryContainer=`
            <div class="category-container">
                <h3 id="id${category.id}" class="category-title">${category.name}</h3>
            </div>                            
        `;
        const categoryTitle = document.getElementById(`id${category.id}`)
        console.log(categoryTitle)
        const html = document.querySelector('#categoriesPreview .categoriesPreview-list').innerHTML;
        document.querySelector('#categoriesPreview .categoriesPreview-list').innerHTML=categoryContainer+html;                
    });
}