interface IGenre {
  id: number;
  name: string;
} 
interface Imovie {
  popularity: number;
  vote_count: number;
  budget: number;
  video: boolean;
  poster_path: string;
  status: string;
  spoken_languages: [{
      iso_639_1: string;
      name: string;
  }],
  genres: [{
      id: number;
      name: string;
  }]
  id: number;
  runtime: number;
  adult: boolean;
  revenue: number;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: [number];
  title: string;
  vote_average: number;
  overview: string;
  release_date: number;    
}

