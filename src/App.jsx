import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Inicio } from '../componentes/Inicio'
import { Semana1 } from '../componentes/Semana1'
import { Crear } from '../componentes/Crear'
import { Menu } from '../componentes/Menu'

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/task' element={<Semana1/>}/>
        <Route path='/User' element={<Crear/>}/>
        <Route path='/Menu' element={<Menu/>}/>

    </Routes>
    </BrowserRouter>
  )
}
