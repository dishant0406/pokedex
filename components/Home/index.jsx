
import PokeCard from '../common/PokeCard/index';
export const Border = ()=>{
  return (
    <>
        <div className="h-[3rem] w-[100vw] bg-[#616161]"/>
        <div className="h-[3rem] flex justify-center w-[100vw]">
          <div className="h-[2rem] w-[50vw] bg-[#616161]" style={{
            clipPath:'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
          }}/>
        </div>
    </>
  )
}

const PokeDex = ({pokemons=[], handleMoreClick}) => {
  return (
    <div className="min-h-[100vh]  overflow-visible px-[2rem] py-[7rem] relative w-[100vw]">
      <div className="fixed z-[3] top-[0] right-[0]">
        <Border/>
      </div>
      <div className="fixed z-[3] bottom-[0] rotate-180 right-[0]">
        <Border/>
      </div>
      <div className='w-[100%] overflow-visible justify-center flex gap-[2rem] flex-wrap'>
        {
          pokemons.map((pokemon, index)=>(
            <div key={pokemon.number} className='overflow-visible'>
              <PokeCard pokemon={pokemon} />
            </div>
          ))
        }
      </div>
      <div className='w-[100%] flex mt-[1rem] justify-center'>  
        <div onClick={handleMoreClick} className="w-[10rem] h-[3rem] rounded-md bg-[#616161] flex justify-center items-center cursor-pointer">
          <p className="text-xl font-bold text-white">More</p>
          </div>
      </div>
    </div>
  )
}

export default PokeDex