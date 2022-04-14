import { useState, useEffect } from "react";
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [dueno, setDueno] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setDueno(paciente.dueno);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handlerSubmit = (e) => {
    e.preventDefault();

    if ( [nombre, dueno, email, alta, sintomas].includes('') ) {
      setError(true)
      return;
    }

    setError(false);

    const objPacientes = {
      nombre,
      dueno,
      email,
      alta,
      sintomas
    }

    if (paciente.id) {
      objPacientes.id = paciente.id;

      const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPacientes : pacienteState)

      setPacientes(pacienteActualizado)
      setPaciente({})
    } else {
      objPacientes.id = generarId();
      setPacientes([...pacientes, objPacientes]);
    }

    setNombre('')
    setDueno('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento de Mascotas</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5" onSubmit={handlerSubmit}>
        {error && <Error /> }
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">
            Nombre de la Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="dueno">
            Nombre del Dueño
          </label>
          <input
            id="dueno"
            type="text"
            placeholder="Nombre del dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={dueno}
            onChange={e => setDueno(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="contacto">
            Email del Dueño
          </label>
          <input
            id="contacto"
            type="email"
            placeholder="Email del dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">
            Alta de la Mascota
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={e => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">
            Sintomas que presenta la mascota
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer"
          value={ paciente.id ? 'Editar Mascota' : 'Agregar Mascota'}
        />
      </form>
    </div>
  )
}

export default Formulario
