import React from 'react'
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