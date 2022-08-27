import axios from "axios";

export const key = 'd23515c13f37fcfe9dc6f675b9db176595e7c301';

export const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    'Authorization': `Bearer ${key}`
  }
})