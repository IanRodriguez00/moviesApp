import { httpAdapter } from '../../../config/adapters/http/http.adapter';
import { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-bd.responses';
import { Movie } from '../../entities/movie.entity';

export const moviesowPlayingUseCase = async ( fetcher:httpAdapter ):Promise<Movie[]>=>{

    try{
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
        console.log({nowPlaying});
        return [];
    }catch(error){
        throw new Error('Error fetchig movies - nowPlaying');
    }

};
