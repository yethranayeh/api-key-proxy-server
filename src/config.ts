import { Options } from 'http-proxy-middleware';
import { ParsedUrlQueryInput } from 'querystring';

export interface Config {
  allowedDomains: string[];
  proxies: Proxy[];
}

export interface Proxy extends Options {
  route: string;
  allowedMethods: string[];
  queryparams?: ParsedUrlQueryInput;
  allowedDomains?: string[];
}

const config: Config = {
  allowedDomains: ['https://yethranayeh.github.io'],
  proxies: [
    {
      route: '/nasa',
      allowedMethods: ['GET'],
      target: 'https://api.nasa.gov/planetary/apod',
      queryparams: {
        api_key: process.env.NASA_API_KEY,
        thumbs: true,
      },
    },
    {
      route: '/weather',
      allowedMethods: ['GET'],
      target: 'https://api.openweathermap.org/data/2.5/weather',
      queryparams: {
        appid: process.env.WEATHER_API_KEY,
      },
    },
  ],
};

export default config;
