import React from 'react'
import Stat from './Stat'
import LoadingPokemon from '../img/loading.gif'
import ErrorPokemon from '../img/error.gif'


function PokedexScreen({ pokemon, loading, error }){
        if(error){
          return (
            <div className="pokedex-screen">
              <img
                src={ErrorPokemon}
                alt="Hubo un error buscando tu pokemon"
                className="pokedex-no-screen"
              />
            </div>
          )
        }
        return (
            <div className="pokedex-screen">
              { !pokemon || loading ?
                <img
                  src={LoadingPokemon}
                  alt="Aun no hay ningun pokémon"
                  className="pokedex-no-screen"
                /> :
                <div className="pokemon-info">
                  <h2 className="pokemon-name">{pokemon.name}</h2>
                  <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <ul className="pokemon-stats">
                    {pokemon.stats.map(item => <Stat key={item.stat.name} item={item}/>)}
                  </ul>
                </div>
              }
            </div>
          )
        }
        
        export default PokedexScreen