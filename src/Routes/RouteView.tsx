import { Routes, Route } from 'react-router-dom'
import { ReactNode } from 'react'

type Props = {
  Home: ReactNode
  NovaTarefa: ReactNode
}

const RouterView = ({ Home, NovaTarefa }: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/Novo" element={NovaTarefa} />
      </Routes>
    </>
  )
}

export default RouterView
