import React from 'react'
import Calendar from 'react-calendar'
import { Cita } from '../components/cita'

const citas = [
  { nombre: 'Cita con el doctor', fecha: '2024-11-13', descripcion: 'Revisión anual' },
  { nombre: 'Cita con el kinésiologo', fecha: '2024-11-15', descripcion: 'Evaluación de rutina' },
  { nombre: 'Cita con el nutricionista', fecha: '2024-11-30', descripcion: 'Seguimiento de dieta' }
]

export const CitasPage = () => {
  return (
    <>
      <h1>Citas</h1>
      <Calendar
        tileClassName={({ date, view }) => {
          if(citas.find(x=>x.fecha==date.toISOString().split('T')[0])){
            return  'mark'
          }
        }}
      />
      <h3>Detalle</h3>
      {citas.map((cita, _) => (
        <Cita key={cita.nombre} {...cita} />
      ))}
    </>
  )
}

export default CitasPage
