import {createContext, useState, useContext as useCon} from 'react'
const Context = createContext()

export const ContextProvider = ({children}) => {
  const [evalModalOpen, setEvalModalOpen] = useState(false)

  return (
    <Context.Provider value={{
      evalModalOpen,
      setEvalModalOpen
    }}>
      {children}
    </Context.Provider>
  )
}

export const useContext = () => {
  return useCon(Context)
}


export default Context
