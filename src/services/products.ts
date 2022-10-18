import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryWithoutToken} from './baseQuery';

export interface PaginationRes<T> {
  page: number;
  size: number;
  totalPage: number;
  data: T[];
}

export interface Product {
  category: String;
  createdAt: String;
  img: String;
  name: String;
  price: number;
  qty: number;
  updatedAt: String;
  _id: String;
}

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: baseQueryWithoutToken,
  endpoints: builder => ({
    getProducts: builder.query<PaginationRes<Product>, string>({
      query: name => ({
        url: `products?q=${name}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetProductsQuery} = productAPI;
