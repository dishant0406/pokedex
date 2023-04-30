import { client } from "../_app"
import { GET_SINGLE_POKEMON, GET_EVOLUTIONS } from 'utils/graphql/Queries'
import { Border, EvalModal } from "components"
import { useContext } from '@/utils/Context';
import { useState } from "react";


const Pokemon = ({ pokemon }) => {
  const { setEvalModalOpen } = useContext()
  const [evolution, setEvolutions] = useState([])


  const handleClick = async () => {
    const { data } = await client.query({
      query: GET_EVOLUTIONS,
      variables: { pokemonId: pokemon.id }
    })
    console.log(data.pokemon.evolutions)
    setEvolutions(data.pokemon.evolutions)
    setEvalModalOpen(true)
  }

  return (
    <div className="min-h-[100vh]  overflow-visible px-[2rem] py-[7rem] relative w-[100vw]">
      <div className="fixed z-[3] top-[0] right-[0]">
        <Border />
      </div>
      <div className="fixed z-[3] bottom-[0] rotate-180 right-[0]">
        <Border />
      </div>
      <div className="w-[100vw] flex items-center justify-center gap-[1rem]">
        <p className="text-[#616161] text-center text-[3rem] font-bold">{pokemon?.name} #{pokemon?.number}</p>
        <button onClick={handleClick} className="bg-[#3c3c3c] hover:scale-105 transition-all duration-300 text-[#fff] px-[1rem] py-[0.5rem] rounded-md text-[1.5rem] font-bold">Evoluations</button>

      </div>
      <div className="w-[100%] flex">
        <div className="w-[40vw]">
          <img className="border-[3px] border-[rgb(0,0,0,0.5)] p-[1rem] rounded-lg" src={pokemon?.image} alt={pokemon?.name} />
        </div>
        <div className="w-[60vw]">
          <div className="w-[100%] mt-[1rem] flex justify-between">
            <div className="w-[50%]">
              <p className="px-[1rem] rounded-md border border-[rgb(0,0,0,0.9)] py-[0.2rem] bg-blue-300 text-[rgb(0,0,0,0.9)] w-fit text-[2rem] font-bold">Classification</p>
              <p className="text-[#616161] mt-[0.5rem] font-medium text-[1.5rem]">{pokemon?.classification?.toUpperCase()}</p>
            </div>
            <div className="w-[50%]">
              <p className="px-[1rem] rounded-md border border-[rgb(0,0,0,0.9)] py-[0.2rem] bg-blue-300 text-[rgb(0,0,0,0.9)] w-fit text-[2rem] font-bold">Height</p>
              <p className="text-[#616161] mt-[0.5rem] text-[1.5rem]">Max: {pokemon?.height?.maximum}</p>
              <p className="text-[#616161] text-[1.5rem]">Min: {pokemon?.height?.minimum}</p>
            </div>
          </div>
          <div className="w-[100%] mt-[1rem] flex justify-between">
            <div className="w-[50%]">
              <p className="px-[1rem] rounded-md border border-[rgb(0,0,0,0.9)] py-[0.2rem] bg-blue-300 text-[rgb(0,0,0,0.9)] w-fit text-[2rem] font-bold">Types</p>
              <div className="flex mt-[0.5rem] gap-[1rem]">
                {pokemon?.types?.map((type, index) => (
                  <p key={index} className="px-[0.5rem] rounded-md py-[0.2rem] bg-green-300 border border-black font-bold text-[1.5rem]">{type}</p>
                ))}
              </div>
            </div>
            <div className="w-[50%]">
              <p className="px-[1rem] rounded-md border border-[rgb(0,0,0,0.9)] py-[0.2rem] bg-blue-300 text-[rgb(0,0,0,0.9)] w-fit text-[2rem] font-bold">Weight</p>
              <p className="text-[#616161] text-[1.5rem]">Max: {pokemon?.weight?.maximum}</p>
              <p className="text-[#616161] text-[1.5rem]">Min: {pokemon?.weight?.minimum}</p>
            </div>
          </div>
          <div className="w-[100%] mt-[1rem] flex justify-between">
            <div className="w-[100%]">
              <p className="px-[1rem] rounded-md border border-[rgb(0,0,0,0.9)] py-[0.2rem] bg-blue-300 text-[rgb(0,0,0,0.9)] w-fit text-[2rem] font-bold">Resistant</p>
              <div className="flex mt-[0.5rem] gap-[1rem]">
                {pokemon?.resistant?.map((resist, index) => (
                  <p key={index} className="px-[0.5rem] rounded-md py-[0.2rem] bg-red-200 border border-black font-bold text-[1.5rem]">{resist}</p>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
      <EvalModal evolution={evolution} />
    </div>
  )
}

const ids = [
  "UG9rZW1vbjowMDE=",
  "UG9rZW1vbjowMDI=",
  "UG9rZW1vbjowMDM=",
  "UG9rZW1vbjowMDQ=",
  "UG9rZW1vbjowMDU=",
  "UG9rZW1vbjowMDY=",
  "UG9rZW1vbjowMDc=",
  "UG9rZW1vbjowMDg=",
  "UG9rZW1vbjowMDk=",
  "UG9rZW1vbjowMTA=",
  "UG9rZW1vbjowMTE=",
  "UG9rZW1vbjowMTI=",
  "UG9rZW1vbjowMTM=",
  "UG9rZW1vbjowMTQ=",
  "UG9rZW1vbjowMTU=",
  "UG9rZW1vbjowMTY=",
  "UG9rZW1vbjowMTc=",
  "UG9rZW1vbjowMTg=",
  "UG9rZW1vbjowMTk=",
  "UG9rZW1vbjowMjA="
]

export async function getStaticPaths() {
  const paths = ids.map(id => ({
    params: { id }
  }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_SINGLE_POKEMON,
    variables: { pokemonId: params.id }
  })

  return {
    props: {
      pokemon: data.pokemon
    },
    revalidate: 10
  }
}



export default Pokemon