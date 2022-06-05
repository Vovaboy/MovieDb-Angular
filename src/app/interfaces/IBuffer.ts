import {IMovie} from "./IMovie";

export interface IBuffer {
  page: number;
  results: IMovie [];
  total_pages: number;
  total_results: number;
}
