import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {IMovie, IObj} from "../interfaces";
import {urls} from "../contains";
import {IGenreObj} from "../interfaces/genre_obj.interface";

class MovieService {
    getAll(): IRes<IObj> {
        return axiosService.get(urls.movies);
    }
    getById(id:string|undefined):IRes<IMovie>{
        return axiosService.get(`${urls.movie}/${id}`)
    }
    getAllGenre(): IRes<IGenreObj>{
        return axiosService.get(urls.genres)
}
    getAllObj(page: number = 1, gen?: number): IRes<IObj> {
        return axiosService.get(`${urls.movies}?page=${page}&with_genres=${gen}`);
    }
}

export const movieService = new MovieService()

