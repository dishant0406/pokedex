import { PokeDex } from "components"
import { useState } from "react"
import { GET_POKEMONS } from 'utils/graphql/Queries'
import { client } from "./_app"

const Home = ({ pokemons }) => {
  const [dispalyPokemons, setDisplayPokemons] = useState(pokemons)
  const [currentPokemon, setCurrentPokemon] = useState(20)

  const handleMoreClick = async () => {
    const next = currentPokemon + 20
    const { data } = await client.query({
      query: GET_POKEMONS,
      variables: { first: next }
    })
    setDisplayPokemons(data.pokemons)
    setCurrentPokemon(next)
  }

  return (
    <div>
      <PokeDex handleMoreClick={handleMoreClick} pokemons={dispalyPokemons} />
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_POKEMONS,
    variables: { first: 20 }
  });



  return {
    props: {
      pokemons: data.pokemons
    },
    revalidate: 10
  }
}


export default Home
