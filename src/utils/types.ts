export interface IGenre {
  id: number;
  name: string;
}

export interface ICompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ICountry {
  iso_3166_1: string;
  name: string;
}

export interface ILanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // or Date if you prefer to work with Date objects
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IFullMovie extends IMovie {
  belongs_to_collection?: any;
  budget: number;
  genres: IGenre[];
  homepage: string;
  imdb_id: string;
  production_companies: ICompany[];
  production_countries: ICountry[];
  revenue: number;
  runtime: number;
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
}

// Screens Props
export type ParamList = {
  Movie: {
    movieId: string;
  };
};
