import { FC, MouseEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import PokemonDetails from "../pokemonDetails/pokemonDetails"
import { addSelectedPokemon, removeSelectedPokemon } from "../../store/pokemons"
import './pokemonContainer.css'
import { Draggable } from "react-beautiful-dnd"

interface pokemonContainerProps {
    name: string
    id: number
    index: number
}

const PokemonContainer: FC<pokemonContainerProps> = ({ name, id, index }) => {
    const { selectedPokemons } = useAppSelector(state => state.pokemons)
    const dispatch = useAppDispatch()

    const handleNameClick = (e: MouseEvent<HTMLHeadingElement>) => {
        e.stopPropagation()
        if (selectedPokemons.includes(id)) {
            dispatch(removeSelectedPokemon(id))
        } else {
            dispatch(addSelectedPokemon(id))
        }
    }

    const isSelected = selectedPokemons.includes(id)

    return (
        <Draggable index={index} draggableId={'pokemon-' + id}>
            {
                (provided) => (
                    <div ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps} className="pokemonContainer">
                        <h1 className={`name ${isSelected && 'active'}`} onClick={handleNameClick}>{name}</h1>
                        {
                            isSelected && <PokemonDetails id={id} />
                        }
                    </div>
                )
            }

        </Draggable>
    )
}

export default PokemonContainer