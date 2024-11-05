import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AgendarRecPage = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
    navigate('/agendar_rec_recurrente'); // Cambia a la ruta que deseas
    };
    const handleNavigate1 = () => {
    navigate('/agendar_rec_unico'); // Cambia a la ruta que deseas
    };
    return (
      <>
        <h1>Agendar Recordatorios</h1>
        <button onClick={handleNavigate}>
          Recordatorio Recurrente
        </button>
        <button onClick={handleNavigate1}>
          Recordatorio Único
        </button>
      </>
    )
}

export default AgendarRecPage