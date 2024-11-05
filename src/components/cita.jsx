import React from "react";


export const Cita = ({ nombre, fecha, descripcion }) => {
  return (
    <div className="cita">
      <h3>{nombre}</h3>
      <p>{fecha}</p>
      <p>{descripcion}</p>
    </div>
  );
}