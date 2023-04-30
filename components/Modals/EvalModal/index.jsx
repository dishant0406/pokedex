import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useContext } from '@/utils/Context'
import { useRouter } from 'next/router'

export default function EvalModal({evolution=[]}) {
  let {evalModalOpen:isOpen,setEvalModalOpen:setIsOpen} = useContext()
  const router = useRouter()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl min-w-md rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Evolution
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className='flex gap-[3rem] items-center'>

                      {evolution?.map((evo, index)=>(
                        <div onClick={()=>{
                          router.push(`/pokemon/${evo.id}`)
                          setIsOpen(false)
                        }} className='flex flex-col justify-center items-center p-[0.5rem] rounded-md cursor-pointer' key={evo.number}>
                          <p key={index} className="text-center text-[#616161] font-bold text-2xl">{evo.name}</p>
                          <img src={evo.image} alt={evo.name} className="w-[5rem] h-[5rem]"/>
                        </div>
                      ))}

                      {(!evolution || evolution?.length === 0) && (
                        <p className="text-center text-[#616161] font-bold text-2xl">No Evolution</p>
                      )}
  
                    </div>
                  </div>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
