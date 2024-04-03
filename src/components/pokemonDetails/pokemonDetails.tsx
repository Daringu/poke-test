import { FC } from "react";
import { useGetPokemonQuery } from "../../store/pokemons";
import Ability from "./ability/ability";
import { getIdFromUrl } from "../../helpers/helpers";
import './pokemonDetails.css'

interface pokemonDetailsProps {
    id: number
}

const PokemonDetails: FC<pokemonDetailsProps> = ({ id }) => {
    const { data, isLoading } = useGetPokemonQuery(id)

    return (
        <div className="pokemon-details_container">
            <h1 className="pokemon-name">
                {data?.name}
            </h1>
            <div className="image">
                {
                    isLoading ? 'Loading' : <img src={data?.sprites.front_default} alt="" />
                }
            </div>
            <div className="abilities">
                <h1>
                    Abilities:
                </h1>
                <div className="abilities-container">
                    {
                        data?.abilities.map(e => {
                            return <Ability key={e.ability.url} id={getIdFromUrl(e.ability.url)} />
                        })
                    }
                </div>
            </div>
            <ul className="stats">
                {data?.stats.slice(0, 4).map(e => {
                    return (
                        <li key={e.stat.name} className="stat">
                            <h1>
                                {e.stat.name}:
                            </h1>
                            <h2>
                                {e.base_stat}
                            </h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PokemonDetails