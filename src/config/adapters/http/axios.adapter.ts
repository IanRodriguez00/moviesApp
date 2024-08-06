import axios, { AxiosInstance } from 'axios';
import {httpAdapter} from './http.adapter';

interface Options {
    baseUrl: string;
    params: Record<string,string>
}

export class AxiosAdapter implements httpAdapter {

    private axiosInstance: AxiosInstance;

    constructor(options: Options) {
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            params: options.params,
        });
    }

  async get<T>(url: string,options?: Record <string, unknown> | undefined ): Promise<T> {
    try {

        const { data } = await axios.get<T>(url,options);
        return data;

    } catch (error) {
        throw new Error(`Error fetching get: ${url}`);
    }
  }
}
