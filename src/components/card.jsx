import React, { useState } from 'react';
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

const Card = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Cambia el estado del checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CardContainer>
      <Symbol>💊</Symbol>
      <TextContainer>
        <TextLine>Lunes</TextLine>
        <TextLine>Tomar medicina - 14:00</TextLine>
        <StyledCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      </TextContainer>
    </CardContainer>
  );
};

export default Card;