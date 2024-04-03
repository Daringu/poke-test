import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { singleAbilityResponse } from '../../../types';

export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getSkill: builder.query<singleAbilityResponse, number>({
      query: (id) => `ability/${id}`,
    }),
  }),
});

export const { useGetSkillQuery } = skillsApi;
