import React, { useState } from 'react';
import FormRecurrente from '../components/form_recurrente';
import FormUnico from '../components/form_unico';
import { useNavigate } from 'react-router-dom';

const AgendarRecForm = () => {
  const [formType, setFormType] = useState('recurrente');
  const navigate = useNavigate();

  const handleFormTypeChange = (e) => {
    setFormType(e.target.value);
  };

  const handleNavigate = () => {
    navigate('/recordatorios');
  };

  const handleNavigate1 = () => {
    navigate(formType === 'recurrente' ? '/recordatorios' : '/citas');
  };

  return (
    <>
      <h1>Agendar Recordatorio</h1>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="recurrente"
            checked={formType === 'recurrente'}
            onChange={handleFormTypeChange}
          />
          Recordatorio Recurrente
        </label>
        <label>
          <input
            type="radio"
            value="unico"
            checked={formType === 'unico'}
            onChange={handleFormTypeChange}
          />
          Recordatorio Único o Cita
        </label>
      </div>
      {formType === 'recurrente' ? (
        <FormRecurrente onSubmit={handleNavigate1} />
      ) : (
        <FormUnico onSubmit={handleNavigate1} />
      )}
      <button className='button' onClick={handleNavigate}>
        Atrás
      </button>
    </>
  );
};

export default AgendarRecForm;