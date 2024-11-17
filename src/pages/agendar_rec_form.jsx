import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FormRecurrente from '../components/form_recurrente';
import FormUnico from '../components/form_unico';

const AgendarRecForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formType, setFormType] = useState('recurrente');

  useEffect(() => {
    if (location.state && location.state.formType) {
      setFormType(location.state.formType);
    }
  }, [location.state]);

  const handleFormTypeChange = (e) => {
    setFormType(e.target.value);
  };

  const handleNavigate = () => {
    navigate('/recordatorios');
  };

  const handleNavigate1 = () => {
    navigate(formType === 'recurrente' ? '/' : '/citas');
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