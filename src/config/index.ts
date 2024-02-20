/**
 * This file imports configuration objects from either the config.dev.js file
 * or the config.prod.js file depending on whether we are in __DEV__ or not.
 *
 * Read more here: https://reactnative.dev/docs/security#storing-sensitive-info
 */
import BaseConfig from './config.base';
import ProdConfig from './config.prod';
import DevConfig from './config.dev';

let ExtraConfig = ProdConfig;

if (__DEV__) {
  ExtraConfig = DevConfig;
}

const Config = {...BaseConfig, ...ExtraConfig};

export default Config;
