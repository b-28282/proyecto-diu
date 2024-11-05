import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AgendarRecRecurrentePage = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
    navigate('/agendar_rec'); // Cambia a la ruta que deseas
    };
    const handleNavigate1 = () => {
    navigate('/recordatorios'); // Cambia a la ruta que deseas
    };
  return (
    <>
      <h1>Recordatorio Recurrente</h1>


      <button onClick={handleNavigate1}>
      Agregar Recordatorio (Enviar Formulario)
      </button>
      <button onClick={handleNavigate}>
      Atrás
      </button>
    </>
  )
}

export default AgendarRecRecurrentePage