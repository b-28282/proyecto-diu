import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Cita } from '../components/cita';

const initialCitas = [
  { nombre: 'Cita con el doctor', fecha: '2024-11-13', descripcion: 'Revisión anual', hora: '10:00' },
  { nombre: 'Cita con el kinésiologo', fecha: '2024-11-15', descripcion: 'Evaluación de rutina', hora: '15:00' },
  { nombre: 'Cita con el nutricionista', fecha: '2024-11-30', descripcion: 'Seguimiento de dieta', hora: '09:00' }
];

export const CitasPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [citas, setCitas] = useState(initialCitas);

  useEffect(() => {
    const storedCitas = JSON.parse(localStorage.getItem('citas')) || [];
    setCitas([...initialCitas, ...storedCitas]);
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  const selectedCita = citas.find(cita => cita.fecha === selectedDate);

  return (
    <>
      <h1>Citas</h1>
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
