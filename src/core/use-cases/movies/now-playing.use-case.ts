import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { NowPlayingResponse} from '../../../infrastructure/interfaces/movie-bd.responses';
import type { Movie } from '../../entities/movie.entity';
import { MovieMapper } from '../../mappers/movie.mapper';

export const moviesNowPlayingUseCase = async ( fetcher:HttpAdapter ):Promise<Movie[]>=>{

    try{
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

        console.log({nowPlaying});

        return nowPlaying.results.map( MovieMapper.fromMovieDBResultToEntity );


    }catch(error){
        console.log(error);
        throw new Error('Error fetchig movies - nowPlaying');
    }

};
