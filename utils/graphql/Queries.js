import { gql } from "apollo-boost";

const GET_POKEMONS = gql`
query Pokemons($first: Int!) {
  pokemons(first: $first) {
    name
    number
    types
    image
    id
  }
}
`

const GET_SINGLE_POKEMON = gql`
query Pokemon($pokemonId: String) {
  pokemon(id: $pokemonId) {
      name
      image
      id
      number
      height {
        maximum
        minimum
      }
      weight {
        maximum
        minimum
      }
      classification
      types
      weaknesses
      resistant
  }
}
`

const GET_EVOLUTIONS = gql`
query Pokemon($pokemonId: String) {
  pokemon(id: $pokemonId) {
    evolutions {
      image
      name
      number
      id
    }
  }
}
`

export {
  GET_POKEMONS,
  GET_SINGLE_POKEMON,
  GET_EVOLUTIONS
}