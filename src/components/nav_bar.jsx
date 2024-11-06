import React from 'react'
import { NavLink } from 'react-router-dom'
import IconoCalendario from '../assets/calendario.png'
import IconoRecordatorio from '../assets/recordatorio.png'
import IconoAgregar from '../assets/agregar.png'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <NavLink
        className={navLinkClass}
        to='/'
      >
        <img src={IconoRecordatorio} alt="Recordatorio" width="30" height="30"/>
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/citas'
      >
        <img src={IconoCalendario} alt="Calendario" width="30" height="30"/>
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/recordatorios'
      >
        <img src={IconoAgregar} alt="Agregar" width="30" height="30"/>
      </NavLink>
    </nav>
  )
}
 
export default NavBar
