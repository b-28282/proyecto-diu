import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'

import NavBar from '../components/nav_bar'
import CitasPage from '../pages/citas_page'
import AgendarRecForm from '../pages/agendar_rec_form'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'>Cuidado Adulto Mayor</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/citas' element={<CitasPage />} />
            <Route path='/recordatorios' element={<AgendarRecForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
