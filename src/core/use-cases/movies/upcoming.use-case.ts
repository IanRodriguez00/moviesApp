import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-bd.responses';
import type { Movie } from '../../entities/movie.entity';
import { MovieMapper } from '../../mappers/movie.mapper';

export const moviesUpComingUseCase = async ( fetcher:HttpAdapter ):Promise<Movie[]>=>{

    try{
        const upComing = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

        console.log({upComing});

        return upComing.results.map( MovieMapper.fromMovieDBResultToEntity );


    }catch(error){
        console.log(error);
        throw new Error('Error fetchig movies - Upcoming');
    }

};
