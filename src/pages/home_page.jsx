import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';
import IconoAgregar from '../assets/agregar.png';
import styled from 'styled-components';

// Estilo opcional para el botón
const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  margin: 1rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const HomePage = () => {
  const navigate = useNavigate();
  const [recordatorios, setRecordatorios] = useState([]);

  useEffect(() => {
    // Retrieve recordatorios from local storage
    const savedRecordatorios = JSON.parse(localStorage.getItem('recordatorios')) || [];
    setRecordatorios(savedRecordatorios);
  }, []);

  const handleAddClick = () => {
    navigate('/recordatorios'); // Cambia a la ruta deseada
  };

  return (
    <>
      <div>
        <h1>Recordatorios</h1>
        <AddButton onClick={handleAddClick}>
          <img src={IconoAgregar} alt="Agregar" />
        </AddButton>
        <Card nombre={"Tomar medicina"} hora={"14:00"} dias={["Ma", "Ju"]} icono={"💊"}/>
        {recordatorios.map((recordatorio, index) => (
          <Card 
            key={index}
            nombre={recordatorio.nombre}
            hora={recordatorio.hora}
            dias={recordatorio.dias}
            icono={recordatorio.icono}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
