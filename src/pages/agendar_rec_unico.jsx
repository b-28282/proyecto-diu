import React from 'react'
import Form from '../components/form';
import { useNavigate } from 'react-router-dom';

export const AgendarRecUnicoPage = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
    navigate('/agendar_rec'); // Cambia a la ruta que deseas
    };
    const handleNavigate1 = () => {
    navigate('/citas'); // Cambia a la ruta que deseas
    };
  return (
    <>
      <h1>Recordatorio Único</h1>
      <div>
      <h1>Recordatorio</h1>
      <Form />
      </div>
      <button onClick={handleNavigate1}>
      Agregar Recordatorio (Enviar Formulario)
      </button>
      <button onClick={handleNavigate}>
      Atrás
      </button>
    </>
  )
}

export default AgendarRecUnicoPage