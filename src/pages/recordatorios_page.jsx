import React from 'react'
import { useNavigate } from 'react-router-dom';



export const RecordatoriosPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
  navigate('/agendar_rec'); // Cambia a la ruta que deseas
  };
  return (
    <>
      <h1>Recordatorios</h1>
      <button onClick={handleNavigate}>
        Agregar Recordatorio
      </button>
    </>
  )
}

export default RecordatoriosPage
