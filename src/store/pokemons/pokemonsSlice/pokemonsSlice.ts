import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { languages } from "../../../types";

interface pokemonsState {
    selectedPokemons:number[]
    selectedLanguage:languages
    limit:number
}

const initialState:pokemonsState = {
    selectedPokemons:[],
    selectedLanguage:'en',
    limit:10
}

export const pokemonsSlice = createSlice({
    name:'pokemonsReducer',
    initialState,
    reducers:{
        setLanguage:(state, action:PayloadAction<languages>)=>{
            state.selectedLanguage = action.payload
        },
        addSelectedPokemon:(state, action:PayloadAction<number>)=>{
            state.selectedPokemons = [...state.selectedPokemons,action.payload]
        },
        removeSelectedPokemon:(state, action:PayloadAction<number>)=>{
            state.selectedPokemons = state.selectedPokemons.filter(pokemonId=>pokemonId!==action.payload)
        },
        setLimit:(state, action:PayloadAction<number>)=>{
            state.limit = action.payload
        }
    }
})

export const {setLanguage, addSelectedPokemon, removeSelectedPokemon, setLimit} = pokemonsSlice.actions

export default pokemonsSlice.reducer