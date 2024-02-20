/**
 * This is a simple cache utility.
 * It will save and retrieve data from storage.
 * It will also remove expired data.
 * It will also have a configurable expiration time.
 * It will also have a configurable prefix.
 *
 * It will also have simple schema
 * single movie will be stored in cache with prefix 'movie'
 * EX: cache-movie-123
 * List of movies will be stored in cache with prefix 'list'
 * EX: cache-list-trending
 * EX: cache-list-popular
 * EX: cache-list-top_rated
 * EX: cache-list-upcoming
 *
 * Custom lists like 'similar' or 'recommended' will take a custom shape
 * as it requires a movie id.
 * EX: cache-list-similar-movie-123
 *
 */

import moment from 'moment';
import {load, remove, save} from '../storage';
import {type IFullMovie} from '../../utils/types';

type listTypes =
  | 'trending'
  | 'popular'
  | 'similar'
  | 'top_rated'
  | 'upcoming'
  | 'recommended';

type periodTypes = 'hour' | 'day' | 'week' | 'month';

const prefixs = {
  // general
  cache: 'cache',

  // movies
  movie: 'movie',
  list: 'list',

  // symbols
  separator: '-',
};

type ICachedItem<T> = {
  value: T,
  timeStamp: number,
  expiryInMinutes?: number,
};

/**
 * Default expiry in minutes
 */
const expireInMinutes: Record<periodTypes, number> = {
  default: 60,
  hour: 60,
  day: 1440,
  week: 10080,
  month: 43800,
};

/**
 * Checks if item is expired
 * @param item
 * @returns boolean
 */
const isExpired = (item: ICachedItem): boolean => {
  const now: moment.Moment = moment(Date.now());
  const storeTime: moment.Moment = moment(item.timeStamp);
  const period: number = item.expiryInMinutes;

  return now.diff(storeTime, 'minutes') > period;
};

/**
 * Concatenate params with dash
 * @param number | string
 * @returns string
 */
const concatStrings = (...params) => params.map(String).join(prefixs.separator);

/**
 * Saves data in cache.
 * @param key
 * @param value
 * @param expiryInMinutes in minutes default is 60
 * @returns boolean
 */
const store = (
  key: string,
  value: any,
  expiryInMinutes: number = expireInMinutes.default, // default 1 hour
): boolean => {
  const item: ICachedItem<IFullMovie> = {
    value,
    timeStamp: Date.now(),
    expiryInMinutes,
  };

  try {
    save(concatStrings(prefixs.cache, key), item);
    return true;
  } catch (err) {
    console.error(`Error in store ${key} to cache: `, err);
    return false;
  }
};

/**
 * Loads data from cache
 * @param key
 * @returns ICachedItem.value | null
 */
const get = (key): ICachedItem['value'] | null => {
  try {
    const item = load(concatStrings(prefixs.cache, key));

    if (!item) {
      return null;
    }

    if (isExpired(item)) {
      remove(concatStrings(prefixs.cache, key));
      return null;
    }
    return item.value;
  } catch (err) {
    console.error(`Error in get ${key} from cache: `, err);
    return null;
  }
};

// custom functions

/**
 * Stores movie in cache
 * @param movieId
 * @param movie
 * @param period
 * @returns boolean
 *
 */
const cacheMovie = (
  movieId: string,
  movie: IFullMovie,
  period?: periodTypes,
): boolean => {
  // can't cache undefined
  if (!movieId || !movie) {
    console.error("Either 'movieId' or 'movie' can't be undefined");
    return false;
  }

  // generate caching key
  let cachingKey = concatStrings(prefixs.movie, movieId);

  return store(cachingKey, movie, period);
};

/**
 * Stores list in cache
 * @param listKey
 * @param listValue
 * @param extraMovieId
 * @param period
 * @returns boolean
 *
 */
const cacheMoviesList = (
  listKey: listTypes,
  listValue: any,
  extraMovieId?: number,
  period?: periodTypes,
): boolean => {
  // can't cache undefined
  if (!listKey || !listValue) {
    console.error("Either 'listKey' or 'listValue' can't be undefined");
    return false;
  }

  // generate caching key
  let cachingKey = concatStrings(prefixs.list, listKey);

  if (listKey === 'similar') {
    // can't cache similar list without movie id
    if (!extraMovieId) {
      console.error("'extraMovieId' can't be undefined");
      return false;
    }

    // generate new cachingKey with movie id
    cachingKey = concatStrings(
      prefixs.list,
      listKey,
      prefixs.movie,
      extraMovieId,
    );
    return store(cachingKey, listValue);
  }
  return store(cachingKey, listValue, period);
};

const getCachedMovie = (movieId: string): IFullMovie | null => {
  // can't cache undefined
  if (!movieId) {
    console.error("'movieId' can't be undefined");
    return null;
  }

  // generate caching key
  let cachingKey = concatStrings(prefixs.movie, movieId);

  return get(cachingKey);
};

const getCachedMoviesList = (
  listKey: listTypes,
  extraMovieId?: number,
): any | null => {
  // can't cache undefined
  if (!listKey) {
    console.error("'listKey' can't be undefined");
    return null;
  }

  // generate caching key
  let cachingKey = concatStrings(prefixs.list, listKey);

  if (listKey === 'similar') {
    // can't cache similar list without movie id
    if (!extraMovieId) {
      console.error("'extraMovieId' can't be undefined");
      return null;
    }

    // generate new cachingKey with movie id
    cachingKey = concatStrings(
      prefixs.list,
      listKey,
      prefixs.movie,
      extraMovieId,
    );

    return get(cachingKey);
  }
  return get(cachingKey);
};

export {cacheMovie, cacheMoviesList, getCachedMovie, getCachedMoviesList};
