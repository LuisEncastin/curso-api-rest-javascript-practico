searchFormBtn.addEventListener('click', () => {
    location.hash = "#search=";
  });

trendingBtn.addEventListener('click', () => {
    location.hash = "#trends";
  });
  
  arrowBtn.addEventListener('click', () => {
    location.hash = "#home";
  });

const navigator = () => {
    console.log({location})
    if (location.hash.startsWith('#trends')) {
        trendsPage()
    } else if (location.hash.startsWith('#search=')) {
        searchPage()
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage()
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage()
    } else {
        homePage()
    }
}

const homePage = () => {
    headerSection.classList.remove('header-container--long') 
    headerSection.style.background=''
    arrowBtn.classList.add('inactive')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')

    getTrendingMoviesPreview(URL_API)
    getMoviesCategories(URL_GENRES)
}

const categoriesPage = () => {
    headerSection.classList.remove('header-container--long') 
    // headerSection.style.background=''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header--arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    console.log('categories page')
}

const movieDetailsPage = () => {
    headerSection.classList.add('header-container--long') 
    // headerSection.style.background=''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header--arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')
    
    console.log('#MovieDetailPage') 
}

const searchPage = () => {
    console.log('#Search') 

    headerSection.classList.remove('header-container--long') 
    // headerSection.style.background=''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header--arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}

const trendsPage = () => {
    console.log('#Trends') 

    headerSection.classList.remove('header-container--long') 
    // headerSection.style.background=''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header--arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}

window.addEventListener("DOMContentLoaded", navigator, false)
window.addEventListener("hashchange", navigator, false)