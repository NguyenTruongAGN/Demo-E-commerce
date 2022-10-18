import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryWithToken} from './baseQuery';

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

export const cartAPI = createApi({
  reducerPath: 'cartAPI',
  baseQuery: baseQueryWithToken,
  endpoints: builder => ({
    getCart: builder.query<PaginationRes<Product>, unknown>({
      query: () => ({
        url: '/cart',
      }),
    }),

    addToCart: builder.mutation<any, {productId: string; qty: number}>({
      query: body => ({
        url: '/cart/add-to-cart',
        body,
        method: 'POST',
      }),
    }),

    updateQuantity: builder.mutation<any, {type: number; productId: string; qty: number}>({
      query: body => ({
        url: '/cart/update-qty',
        body,
        method: 'PUT',
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useLazyGetCartQuery,
  useAddToCartMutation,
  useUpdateQuantityMutation,
} = cartAPI;
