import React from 'react'
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

  const handleAddClick = () => {
    navigate('/recordatorios'); // Cambia a la ruta deseada
  };

  return (
    <>
      <div>
        <h1>Recordatorios de hoy</h1>
        <Card />
        <AddButton onClick={handleAddClick}>
          <img src={IconoAgregar} alt="Agregar" />
        </AddButton>
      </div>
    </>
  );
};

export default HomePage
