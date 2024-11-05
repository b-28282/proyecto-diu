import React from "react";


export const Cita = ({ nombre, fecha, descripcion }) => {
  return (
    <>
      <h3>{nombre}</h3>
      <p>{fecha}</p>
      <p>{descripcion}</p>
    </>
  );
}