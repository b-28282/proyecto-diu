import React from 'react'
import { useNavigate } from 'react-router-dom';
import Form1 from '../components/form1';


export const AgendarRecRecurrentePage = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
    navigate('/recordatorios'); // Cambia a la ruta que deseas
    };
    const handleNavigate1 = () => {
    navigate('/recordatorios'); // Cambia a la ruta que deseas
    };
  return (
    <>
      <h1>Recordatorio Semanal</h1>

      <Form1 onSubmit={handleNavigate1} />
      <button className='button' onClick={handleNavigate}>
      Atrás
      </button>
    </>
  )
}

export default AgendarRecRecurrentePage