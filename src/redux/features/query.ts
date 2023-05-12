import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    posts: builder.query<Users[], void>({
      query: () => "/users",
    }),

    post: builder.query<Users, string>({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { usePostsQuery, usePostQuery } = postsApi;
