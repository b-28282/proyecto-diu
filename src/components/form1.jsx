import React, { useState } from 'react';
import styled from 'styled-components';
import Checklist from '../components/checklist';

// Contenedor principal del formulario


const Form1Container = styled.div`
  padding: 1rem;
  max-width: 400px;
  margin: auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Etiquetas de texto
const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
  font-weight: bold;
`;

// Contenedor de la línea de fecha y hora
const TimeRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

// Input para fecha y hora
const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

// Campo de texto grande para la razón del recordatorio
const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  min-height: 80px;
`;

// Botón de enviar
const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: white;
  background-color: #4CAF50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #45a049;
  }
`;

const Form1 = ({ onSubmit }) => {
  const [form1Data, setForm1Data] = useState({

    time: '',
    reason: ''
  });

  // Maneja los cambios en los inputs
  const handleChange = (a) => {
    const { name, value } = a.target;
    setForm1Data({
      ...form1Data,
      [name]: value
    });
  };

  // Envía el formulario
  const handleSubmit = (a) => {
    a.preventDefault();
    console.log("Datos del formulario:", form1Data);
    if (onSubmit) {
      onSubmit(); // Llama a la función pasada por props (handleNavigate1 en este caso)
    }
  };

  return (
    
    <Form1Container>
      <form onSubmit={handleSubmit}>
        {/* Línea de Fecha y Hora */}
        <Label>Hora a Avisar</Label>
        <TimeRow>

          <Input 
            type="time" 
            name="time" 
            value={form1Data.time} 
            onChange={handleChange} 
            required 
          />
        </TimeRow>
        <Label>Días del Recordatorio</Label>
        <Checklist />

        {/* Campo de texto para la razón del recordatorio */}
        <Label>Razón del Recordatorio</Label>
        <TextArea 
          name="reason" 
          value={form1Data.reason} 
          onChange={handleChange} 
          placeholder="Escribe la razón del recordatorio aquí..." 
          required 
        />

        {/* Botón de enviar */}
        <SubmitButton type="submit">Guardar Recordatorio</SubmitButton>
      </form>
    </Form1Container>
  );
};

export default Form1;