import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'

import NavBar from '../components/nav_bar'
import CitasPage from '../pages/citas_page'
import RecordatoriosPage from '../pages/recordatorios_page'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'>Interfaz energética</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/recordatorios' element={<RecordatoriosPage />} />
            <Route path='/citas' element={<CitasPage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
