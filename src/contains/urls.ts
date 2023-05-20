const baseURL = 'https://api.themoviedb.org/3'

const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTBjZjM5MzliNTIwZTJkMTJkMjQ2MzY4M2YzY2M3NyIsInN1YiI6IjYyOTQ4NWQ1Y2RkYmJjMTMwY2JhOTE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zR9logKd1Y8xUoD672qaYkXWDaHd7ZXKHMDqZXcKQb0'

const urls = {
    movies: `/discover/movie`,
    movie: `/movie`,
    genres: `/genre/movie/list`,
    now_playing: `/movie/now_playing`,
    popular: `/movie/popular`,
    latest: `/movie/latest`,
    topTen: `/movie/top_rated`,
    search: `/search/movie`,
    video: `/movie/{movie_id}/videos`


}

export {
    baseURL,
    urls,
    access
}
