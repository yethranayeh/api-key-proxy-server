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
      target: 'https://api.nasa.gov/planetary/apod?thumbs=true',
      queryparams: {
        api_key: process.env.NASA_API_KEY,
      },
    },
  ],
};

export default config;
