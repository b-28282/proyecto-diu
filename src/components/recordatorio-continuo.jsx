import React, { useState } from 'react';
import styled from 'styled-components';

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

const TimeInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const DaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const DayLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  accent-color: #4CAF50;
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

  &:hover {
    background-color: #45a049;
  }
`;

const WeeklyReminderForm = ({ onSubmit }) => {
  // Estado para el horario y los días seleccionados
  const [formData, setFormData] = useState({
    time: '',
    days: {
      lunes: false,
      martes: false,
      miercoles: false,
      jueves: false,
      viernes: false,
      sabado: false,
      domingo: false,
    }
  });

  const handleTimeChange = (e) => {
    setFormData({ ...formData, time: e.target.value });
  };

  const handleDayChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      days: {
        ...prevData.days,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    if (onSubmit) {
      onSubmit(formData); // Llama a la función pasada por props para manejar los datos
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Label>Horario del Recordatorio</Label>
        <TimeInput 
          type="time" 
          name="time" 
          value={formData.time} 
          onChange={handleTimeChange} 
          required 
        />

        <Label>Días de Recordatorio</Label>
        <DaysContainer>
          {Object.keys(formData.days).map((day) => (
            <DayLabel key={day}>
              <Checkbox 
                name={day} 
                checked={formData.days[day]} 
                onChange={handleDayChange} 
              />
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </DayLabel>
          ))}
        </DaysContainer>

        <SubmitButton type="submit">Guardar Recordatorio</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default WeeklyReminderForm;