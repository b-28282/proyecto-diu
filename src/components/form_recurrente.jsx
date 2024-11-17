import React, { useState } from 'react';
import styled from 'styled-components';
import Checklist from './checklist';

const FormContainer = styled.div`
  padding: 1rem;
  max-width: 400px;
  margin: auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
  font-weight: bold;
`;

const TimeRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  min-height: 80px;
`;

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

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const FormRecurrente = ({ onSubmit }) => {
  const [formRecurrenteData, setFormRecurrenteData] = useState({
    hora: '',
    nombre: '',
    icono: '💊',
    dias: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRecurrenteData({
      ...formRecurrenteData,
      [name]: value
    });
  };

  const handleDaysChange = (updatedItems) => {
    const selectedDays = updatedItems.filter(item => item.completed).map(item => item.text);
    setFormRecurrenteData({
      ...formRecurrenteData,
      dias: selectedDays
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formRecurrenteData);

    // Retrieve existing recordatorios from local storage
    const existingRecordatorios = JSON.parse(localStorage.getItem('recordatorios')) || [];

    // Add the new recordatorio to the array
    const updatedRecordatorios = [...existingRecordatorios, formRecurrenteData];

    // Save the updated array back to local storage
    localStorage.setItem('recordatorios', JSON.stringify(updatedRecordatorios));

    if (onSubmit) {
      onSubmit(formRecurrenteData);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Label>Hora a Avisar</Label>
        <TimeRow>
          <Input 
            type="time" 
            name="hora" 
            value={formRecurrenteData.hora} 
            onChange={handleChange} 
            required 
          />
        </TimeRow>
        <Label>Días del Recordatorio</Label>
        <Checklist onDaysChange={handleDaysChange} />

        <Label>Razón del Recordatorio</Label>
        <TextArea 
          name="nombre" 
          value={formRecurrenteData.nombre} 
          onChange={handleChange} 
          placeholder="Escribe la razón del recordatorio aquí..." 
          required 
        />

        <Label>Selecciona un Icono</Label>
        <Select 
          name="icono" 
          value={formRecurrenteData.icono} 
          onChange={handleChange}
        >
          <option value="💊">💊</option>
          <option value="🩺">🩺</option>
          <option value="💉">💉</option>
          <option value="🩹">🩹</option>
          <option value="🧪">🧪</option>
          <option value="🩸">🩸</option>
          <option value="🧴">🧴</option>
        </Select>

        <SubmitButton type="submit">Guardar Recordatorio</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default FormRecurrente;