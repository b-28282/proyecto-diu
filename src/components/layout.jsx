import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'

import NavBar from '../components/nav_bar'
import CitasPage from '../pages/citas_page'
import RecordatoriosPage from '../pages/recordatorios_page'
import AgendarRecPage from '../pages/agendar_rec_page'
import AgendarRecRecurrentePage from '../pages/agendar_rec_recurrente'
import AgendarRecUnicoPage from '../pages/agendar_rec_unico'

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
            <Route path='/agendar_rec' element={<AgendarRecPage/>}/>
            <Route path='/agendar_rec_recurrente' element={<AgendarRecRecurrentePage/>}/>
            <Route path='/agendar_rec_unico' element={<AgendarRecUnicoPage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
