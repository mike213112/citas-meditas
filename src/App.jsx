import { useState, useEffect } from 'react'
import './App.css'
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []

    setPacientes(pacientesLS)
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacienteActualizado = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacienteActualizado)
  }

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex" style={{ height: '78vh' }}>
        <Formulario
          pacientes={pacientes}
          paciente={paciente}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
