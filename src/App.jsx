import { useState } from 'react'
import './App.css'
import {DetallesCliente} from './components/DetallesCliente'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Detalles del cliente</h1>
      <DetallesCliente nombreRestaurante = {'El tenedor dorado'} nombreClienteReserva = {'Jesús Pineda'} correoClienteReserva = {'correo@correo.com'} 
      telefonoClienteReserva = {'999 999 991'} fechaReserva = {'9 de marzo'} horaReserva = {'19:30'} cantidadInvitadosReserva = {2}/>
    </>
  )
}

export default App