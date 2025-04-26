// common
export const HTTPS = 'https://';
export const HTTP = 'http://';

// GitHub API
export const GH_ROOT = 'vipreal.github.io/apijson/'
export const GH_TRON = 'tron_api.json'
export const GH_API = 'api.json'

export const GH_TRON_API = HTTPS+GH_ROOT+GH_TRON
export const GH_KEY = HTTPS+GH_ROOT+GH_API

// Кинопоиск API
export const OPTIONS = (KEY) => {
  return {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': KEY
    } 
  } 
};

// Поиск картинок по типу (пример: "cover", "!cover")
export const TYPE = {
  backdrops: "backdrops",
  cover: "cover",
  frame: "frame",
  promo: "promo",
  screenshot: "screenshot",
  shooting: "shooting",
  still: "still",
  wallpaper: "wallpaper"
}

// Список полей требуемых в ответе из модели
export const SELECTFIELDS = {
  movieId: "movieId",
  type: "type"
}

export const MOVIEID = {
  tron: 17463,
  legacy: 399959,
  ares: 634944,
  nextDay: 583707,
  uprising: 576152,
}

export const KINODEV_ROOT = 'api.kinopoisk.dev/v1.4/';
export const KINODEV_MOVIE = 'movie/';
export const KINODEV_TRON = '17463';

export const KINODEV_IMAGE = 'image'
export const KINODEV_IMAGE_PAGE = '?page='
export const KINODEV_IMAGE_LIMIT = '&limit='
export const KINODEV_IMAGE_MOVIEID = '&movieId='
export const KINODEV_IMAGE_TYPE = '&type='
export const KINODEV_IMAGE_SELECTFIELDS = '&selectFields='

export const API_MOVIE = HTTPS+KINODEV_ROOT+KINODEV_MOVIE+KINODEV_TRON;

// fetch('https://api.kinopoisk.dev/v1.4/movie/17463', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// swapi
// export const SWAPI_ROOT = 'swapi.dev/api/';
// export const SWAPI_PEOPLE = 'people';
// export const SWAPI_PEOPLE_PAGE = '/?page=';
// export const SWAPI_PARAM_SEARCH = '/?search=';

// export const API_PEOPLE = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PEOPLE_PAGE;
// export const API_PERSON = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE;
// export const API_SEARCH = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PARAM_SEARCH;

//visual guide
// export const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/';
// export const GUIDE_PEOPLE = 'characters';
// export const GUIDE_IMG_EXTENSION = '.jpg';

// export const URL_IMG_PERSON = GUIDE_ROOT_IMG+GUIDE_PEOPLE;