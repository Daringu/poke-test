import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const statsApi = createApi({
  reducerPath: 'statsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getStat: builder.query({
      query: (id:number) => `stat/${id}`,
    }),
  }),
});

export const { useGetStatQuery } = statsApi;
