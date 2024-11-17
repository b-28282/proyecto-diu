import React, { useState } from 'react';
import styled from 'styled-components';

// Contenedor principal del formulario
const FormContainer = styled.div`
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
const DateTimeRow = styled.div`
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

const FormUnico = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    hora: '',
    descripcion: ''
  });

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);

    // Obtener citas existentes de localStorage
    const existingCitas = JSON.parse(localStorage.getItem('citas')) || [];

    // Agregar nueva cita
    const newCitas = [...existingCitas, formData];

    // Guardar en localStorage
    localStorage.setItem('citas', JSON.stringify(newCitas));

    if (onSubmit) {
      onSubmit(); // Llama a la función pasada por props (handleNavigate1 en este caso)
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {/* Campo de texto para el nombre */}
        <Label>Nombre</Label>
        <Input 
          type="text" 
          name="nombre" 
          value={formData.nombre} 
          onChange={handleChange} 
          placeholder="Escribe el nombre aquí..." 
          required 
        />

        {/* Línea de Fecha y Hora */}
        <Label>Ingrese Fecha y Hora</Label>
        <DateTimeRow>
          <Input 
            type="date" 
            name="fecha" 
            value={formData.fecha} 
            onChange={handleChange} 
            required 
          />
          <Input 
            type="time" 
            name="hora" 
            value={formData.hora} 
            onChange={handleChange} 
            required 
          />
        </DateTimeRow>

        {/* Campo de texto para la razón del recordatorio */}
        <Label>Razón del Recordatorio</Label>
        <TextArea 
          name="descripcion" 
          value={formData.descripcion} 
          onChange={handleChange} 
          placeholder="Escribe la razón del recordatorio aquí..." 
          required 
        />

        {/* Botón de enviar */}
        <SubmitButton type="submit">Guardar Recordatorio</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default FormUnico;