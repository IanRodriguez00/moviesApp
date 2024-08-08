import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-bd.responses';
import type { Movie } from '../../entities/movie.entity';
import { MovieMapper } from '../../mappers/movie.mapper';

export const moviesTopRatedUseCase = async ( fetcher:HttpAdapter ):Promise<Movie[]>=>{

    try{
        const topRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated');

        console.log({topRated});

        return topRated.results.map( MovieMapper.fromMovieDBResultToEntity );


    }catch(error){
        console.log(error);
        throw new Error('Error fetchig movies - topRated');
    }

};
