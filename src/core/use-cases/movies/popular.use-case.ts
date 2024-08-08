import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-bd.responses';
import type { Movie } from '../../entities/movie.entity';
import { MovieMapper } from '../../mappers/movie.mapper';

export const moviesPopularUseCase = async ( fetcher:HttpAdapter ):Promise<Movie[]>=>{

    try{
        const popular = await fetcher.get<MovieDBMoviesResponse>('/popular');

        console.log({popular});

        return popular.results.map( MovieMapper.fromMovieDBResultToEntity );


    }catch(error){
        console.log(error);
        throw new Error('Error fetchig movies - popular');
    }

};
