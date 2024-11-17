import React from "react";


export const Cita = ({ nombre, fecha, descripcion, hora }) => {
  return (
    <div className="cita">
      <h3>{nombre}</h3>
      <p>{fecha} {hora}</p>
      <p>{descripcion}</p>
    </div>
  );
}