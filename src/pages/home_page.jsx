import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';

export const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
  navigate('/agendar_rec'); // Cambia a la ruta que deseas
  };
  return (
    <>
      <div>
        <h1>Ejemplo de Tarjeta</h1>
        <Card />
      </div>
      <h1>Recordatorios</h1>
      <button onClick={handleNavigate}>
        Agregar Recordatorio
      </button>
    </>
  )
}

export default HomePage
