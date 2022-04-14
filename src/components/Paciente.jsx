import {useState} from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, dueno, email, alta, sintomas, id} = paciente;
  const [ animation, setAnimation ] = useState(false)

  const handleEliminar = () => {
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
      eliminarPaciente(id)
    }, 2000)
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">
          {nombre}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Dueño: {''}
        <span className="font-normal normal-case">
          {dueno}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">
          {email}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: {''}
        <span className="font-normal normal-case">
          {alta}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {''}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase text-lg rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase text-lg rounded-lg"
          onClick={handleEliminar}
        >
            {animation ? 'Eliminando...' : 'Eliminar'}
        </button>
      </div>
    </div>
  )
}

export default Paciente