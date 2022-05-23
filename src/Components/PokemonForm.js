import React, { useState } from 'react'

function PokemonForm({ setPokemonId, setLoading, setError }){
  const [ pokemon, setPokemon ] = useState('')

  const handleChange = e => {
    setPokemon(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(pokemon !== ''){
      setError(false)
      setLoading(true)
      setPokemonId(window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon)
      setPokemon('')
      return
    }
    setError(true)
  }

  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokemon}
        placeholder="Busca tu pokemon"
        onChange={handleChange}
        autoComplete="off"/>
      <input type="submit" className="pokemon-btn" value=""/>
    </form>
  )
}

export default PokemonForm
