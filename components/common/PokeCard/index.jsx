import { useRouter } from 'next/router'
import React from 'react'

const PokeCard = ({pokemon}) => {
  const router = useRouter()
  return (
    <div onClick={()=>router.push(`pokemon/${pokemon.id}`)} className="w-[15rem] rounded-md hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center border border-[rgb(0,0,0,0.5)] min-h-[20.5rem]">
          <div style={{
            backgroundImage: `url(${pokemon?.image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }} className="h-[13rem] border-b border-[rgb(0,0,0,0.5)] mt-[0.5rem] w-[90%]"/>
          <div className="w-[90%]">
            <p className="text-[#616161] font-bold text-xl">#{pokemon?.number}</p>
            <p className="text-center text-[#616161] font-bold text-2xl">{pokemon?.name}</p>
            <div className="flex mt-[0.5rem] justify-center gap-[1rem]">

            {
              pokemon?.types.map((type, index)=>(
                <p key={index} className="font-bold px-[1rem] py-[0.1rem] rounded-md bg-green-500 text-center">{type}</p>
                ))
              }
            </div>
          </div>
      </div>
  )
}

export default PokeCard