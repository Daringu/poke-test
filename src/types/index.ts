interface pokemonsResponse {
    count:number
    next:string | null
    previous:string | null
    results:{name:string, url:string}[]
}

type languages = 'en' | 'it' | 'fr'

interface stat{
    name:string
    url:string
}

interface singlePokemonResponse {
    abilities:{ability:{name:string, url:string}}[]
    base_experience:number
    id:number
    height:number
    name:string
    weight:number
    stats:{base_stat:number,effort:number,stat:stat}[]
    sprites:{
        front_default:string
    }
}

interface singleAbilityResponse {
    name:string
    id:number
    names:{name:string, language:{name:string, url:string}}[]
}

export type {pokemonsResponse, singlePokemonResponse, stat, singleAbilityResponse, languages}