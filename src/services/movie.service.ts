import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {IMovie, IObj} from "../interfaces";
import {urls} from "../contains";
import {IGenreObj} from "../interfaces/genre_obj.interface";

class MovieService {
    getAll(): IRes<IObj> {
        return axiosService.get(urls.movies);
    }
    getAllObj(page: number = 1, gen?: string|null): IRes<IObj> {
        return axiosService.get(`${urls.movies}?page=${page}&with_genres=${gen}`);
    }
    getById(id:string|undefined):IRes<IMovie>{
        return axiosService.get(`${urls.movie}/${id}`)
    }
    getAllGenre(): IRes<IGenreObj>{
        return axiosService.get(urls.genres)
}
}

export const movieService = new MovieService()

