import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {IMovie, IObj, IResults, IVideo} from "../interfaces";
import {urls} from "../contains";
import {IGenreObj} from "../interfaces/genre_obj.interface";

class MovieService {

    getAll(page: string | null = "1", gen?: string | null): IRes<IObj> {
        return axiosService.get(`${urls.movies}?page=${page}&with_genres=${gen}`);
    }

    getById(id: string | undefined): IRes<IMovie> {
        return axiosService.get(`${urls.movie}/${id}`)
    }

    getAllGenre(): IRes<IGenreObj> {
        return axiosService.get(urls.genres)
    }

    getSearch(filmName: string|null, page: string|null = "1"): IRes<IObj> {
        return axiosService.get(`${urls.search}?query=${filmName}&&page=${page}`);
    }
    getMovieVideo(id: string | undefined): IRes<IVideo> {
        return axiosService.get(`${urls.movie}/${id}/videos`)
    }

}

export const movieService = new MovieService()

