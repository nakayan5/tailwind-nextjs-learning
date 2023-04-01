import axiso, { AxiosInstance } from 'axios';

const microcmsURL = 'https://nc2am0zm24.microcms.io/api/v1/';

export const MICROCMS_API: AxiosInstance = axiso.create({
  baseURL: microcmsURL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.MICROCMS_API_KEY
  }
});