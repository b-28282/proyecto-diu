import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import { Cita } from '../components/cita';
import styled from 'styled-components';
import IconoAgregar from '../assets/agregar.png';

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

const initialCitas = [
  { nombre: 'Cita con el doctor', fecha: '2024-11-13', descripcion: 'Revisión anual', hora: '10:00' },
  { nombre: 'Cita con el kinésiologo', fecha: '2024-11-15', descripcion: 'Evaluación de rutina', hora: '15:00' },
  { nombre: 'Cita con el nutricionista', fecha: '2024-11-30', descripcion: 'Seguimiento de dieta', hora: '09:00' }
];

export const CitasPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [citas, setCitas] = useState(initialCitas);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCitas = JSON.parse(localStorage.getItem('citas')) || [];
    setCitas([...initialCitas, ...storedCitas]);
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  const handleAddClick = () => {
    navigate('/recordatorios', { state: { formType: 'unico' } }); // Pass the formType state
  };

  const selectedCita = citas.find(cita => cita.fecha === selectedDate);

  return (
    <>
      <h1>Citas</h1>
      <AddButton onClick={handleAddClick}>
          <img src={IconoAgregar} alt="Agregar" />
      </AddButton>
      <Calendar
        onClickDay={handleDateClick}
        tileClassName={({ date, view }) => {
          if (citas.find(x => x.fecha === date.toISOString().split('T')[0])) {
            return 'mark';
          }
        }}
      />
      <h3>Detalle</h3>
      {selectedCita ? (
        <Cita key={selectedCita.nombre} {...selectedCita} />
      ) : (
        <p>Seleccione una fecha para ver los detalles de la cita.</p>
      )}
    </>
  );
};

export default CitasPage;
