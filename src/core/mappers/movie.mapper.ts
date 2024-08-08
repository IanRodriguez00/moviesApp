import { Result } from '../../infrastructure/interfaces/movie-bd.responses';
import { Movie } from '../entities/movie.entity';


export class MovieMapper {


    static fromMovieDBResultToEntity( result: Result ):Movie{
        return{
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: result.release_date,
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500 ${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500 ${result.backdrop_path}`,
        };
    }
}
