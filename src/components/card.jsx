import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Estilos para la tarjeta
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  background-color: #f9f9f9;
`;

// Estilos para el ícono o símbolo
const Symbol = styled.div`
  margin-right: 1rem;
  font-size: 2rem;
`;

// Contenedor de texto
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

// Estilos para cada línea de texto
const TextLine = styled.div`
  font-size: 1rem;
  margin: 0.2rem 0;
`;

// Checkbox estilizado
const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  accent-color: ${props => (props.checked ? '#4CAF50' : '#ccc')};
  width: 20px;
  height: 20px;
  margin-top: 0.5rem;
  cursor: pointer;
`;

const Card = ({ dias, nombre, hora, icono }) => {
  const [isChecked, setIsChecked] = useState(() => {
    // Recupera el estado inicial desde sessionStorage
    const storedState = sessionStorage.getItem('checkboxState-'+nombre);
    return storedState ? JSON.parse(storedState) : false;
  });

  const handleCheckboxChange = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    // Guarda el nuevo estado en sessionStorage
    sessionStorage.setItem('checkboxState-'+nombre, JSON.stringify(newState));
  };

  return (
    <CardContainer>
      <Symbol>{icono}</Symbol>
      <TextContainer>
        <TextLine>{dias.join(", ")}</TextLine>
        <TextLine>{nombre} - {hora}</TextLine>
        <StyledCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      </TextContainer>
    </CardContainer>
  );
};

export default Card;