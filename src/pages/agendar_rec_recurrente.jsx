import React from 'react'
import WeeklyReminderForm from '../components/recordatorio-continuo';
import { useNavigate } from 'react-router-dom';

export const AgendarRecRecurrentePage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/agendar_rec'); 
  };
  const handleSubmit = (formData) => {
    console.log("Datos del formulario:", formData);
    navigate('/citas'); 
  };
  return (
    <>
      <h1>Recordatorio Semanal</h1>
      <WeeklyReminderForm onSubmit={handleSubmit} />

      <button onClick={handleNavigate}>
        Atrás
      </button>
    </>

  )
}

export default AgendarRecRecurrentePage