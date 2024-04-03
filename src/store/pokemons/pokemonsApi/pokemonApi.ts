import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pokemonsResponse, singlePokemonResponse } from '../../../types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query<pokemonsResponse, number>({
      query: (limit) => `pokemon?limit=${limit?limit:10}`,
    }),
    getPokemon: builder.query<singlePokemonResponse, number>({
        query: (id)=>`pokemon/${id}`
    })
  }),
});

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonApi;
