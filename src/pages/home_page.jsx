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
        <h1>Recordatorios de hoy</h1>
        <Card />
      </div>
    </>
  )
}

export default HomePage
