import React from 'react'
import Form from '../components/form_unico';
import { useNavigate } from 'react-router-dom';

export const AgendarRecUnicoPage = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
    navigate('/recordatorios'); // Cambia a la ruta que deseas
    };
    const handleNavigate1 = () => {
    navigate('/citas'); // Cambia a la ruta que deseas
    };
  return (
    <>
      <div>
        <h1>Recordatorio Único</h1>    
        <Form onSubmit={handleNavigate1} />
      </div>
      <button className='button' onClick={handleNavigate}>
        Atrás
      </button>
    </>
  )
}

export default AgendarRecUnicoPage