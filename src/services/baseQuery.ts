import {fetchBaseQuery} from '@reduxjs/toolkit/query';

export const getToken = () => {
  let token: string | null;
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMzMmE1ZmQ4ZWEwZWM3MTE5OGM4N2FlIiwiaWF0IjoxNjY1OTgxMTI0LCJleHAiOjE2NjU5ODgzMjR9.HmFu9kOi9U7T_-NUErI0kFUv6UbA6GB5kLKOyYor32o';

  return token;
};

export const baseQueryWithToken = fetchBaseQuery({
  baseUrl: 'https://reactnativechatapp.herokuapp.com/api/',
  prepareHeaders: headers => {
    const token = getToken();
    if (token) {
      headers.set(
        'authorization',
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMzMmE1ZmQ4ZWEwZWM3MTE5OGM4N2FlIiwiaWF0IjoxNjY1OTk3MTEwLCJleHAiOjE2NjYwMDQzMTB9.uCMl9wyZpHL4v71sQ42ypFRPNqjyCKWjbyVJbS8pvuw`,
      );
    }
    return headers;
  },
});

export const baseQueryWithoutToken = fetchBaseQuery({
  baseUrl: 'https://reactnativechatapp.herokuapp.com/api/',
});
