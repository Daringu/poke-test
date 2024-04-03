import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi, skillsApi, statsApi } from './pokemons';
import pokemonsSliceReducer from './pokemons/pokemonsSlice/pokemonsSlice'

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]:pokemonApi.reducer,
    [skillsApi.reducerPath]:skillsApi.reducer,
    [statsApi.reducerPath]:statsApi.reducer,
    pokemons:pokemonsSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware).concat(skillsApi.middleware).concat(statsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch