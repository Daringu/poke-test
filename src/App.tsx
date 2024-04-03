/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import PokemonContainer from './components/pokemonContainer/pokemonContainer'
import { getIdFromUrl } from './helpers/helpers'
import { useAppSelector } from './hooks'
import { useGetPokemonsQuery } from './store/pokemons'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

function App() {
  const { limit } = useAppSelector(state => state.pokemons)
  const { data, isLoading } = useGetPokemonsQuery(limit)
  const [pokemons, setPokemons] = useState<{ name: string, url: string }[] | undefined>(undefined)

  useEffect(() => {
    if (!isLoading && data) {
      setPokemons(data.results)
    }
  }, [isLoading, data])

  const handleOnDragEnd = (result: any) => {
    const items = Array.from(pokemons!)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setPokemons(items)
  }

  return (
    <div className='container'>
      <Header />
      {
        isLoading ?
          <h1>Loading...</h1>
          :
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='pokemons'>
              {
                (provided) => (
                  <div className='names-container' ref={provided.innerRef} {...provided.droppableProps}>
                    {pokemons?.map((e, i) => <PokemonContainer index={i} key={e.url} name={e.name} id={getIdFromUrl(e.url)} />)}
                    {
                      provided.placeholder
                    }
                  </div>
                )
              }
            </Droppable>
          </DragDropContext >
      }
    </div >
  )
}

export default App
