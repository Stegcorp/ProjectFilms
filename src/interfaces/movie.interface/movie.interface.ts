import { IGenre } from "../genre.interface";
import { ICompany } from "./production_companies.interface";
import { IProduct } from "./production_countries.interface";

export interface IMovie {
    budget?: number;
    genres?: IGenre[];
    id?: number;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    production_companies?: ICompany[];
    runtime?: number;
    title?: string;
    tagline?: string;
    vote_average?: number;
    vote_count?: number;
    production_countries?: IProduct[];
}
