import axios from 'axios';
import { request } from 'graphql-request';
import { graphQLendPoint, andhraQuery } from './Query';

//sending data as error,response in callback

export const getAndhraDataWithHistorical = async (callback) => {
  const response = await request(
    graphQLendPoint,
    andhraQuery,
    {}
  ).catch((err) => callback(err.response.data, null));
  callback(null, response);
};

export const getAndhraDataWithoutHistorical = async (callback) => {
  const response = await request(
    graphQLendPoint,
    andhraQuery,
    {}
  ).catch((err) => callback(err.response.data, null));
  callback(null, response);
};
