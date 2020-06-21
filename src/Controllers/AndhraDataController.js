import axios from 'axios';
import { request } from 'graphql-request';
import {
  graphQLendPoint,
  andhraQuerywithHistorical14days,
  andhraQuery,
} from './Query';

//sending data as error,response in callback

export const getAndhraDataWithHistorical14days = async (callback) => {
  const response = await request(
    graphQLendPoint,
    andhraQuerywithHistorical14days,
    {}
  ).catch((err) => callback(err, null));
  callback(null, response);
};

export const getAndhraDataWithoutHistorical = async (callback) => {
  const response = await request(
    graphQLendPoint,
    andhraQuery,
    {}
  ).catch((err) => callback(err, null));
  callback(null, response);
};
