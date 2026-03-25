export default function Carta({ personajes, setPersonajes, personaje }) {


    const eliminarPersonaje = (id) => {
        setPersonajes(personajes.filter((perso, i) => perso.id !== id))
    }

    return (
        <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
            <img
                src={personaje.image}
                alt={personaje.name}
                className="w-full h-48 object-cover rounded-xl mb-3"
            />

            <h3 className="text-lg font-bold">{personaje.name}</h3>

            <p className="text-sm text-gray-600">
                {personaje.species} - {personaje.status}
            </p>
            <button
                onClick={() => eliminarPersonaje(personaje.id)}
                className="bg-blue-300 p-3 rounded mt-4 hover:bg-red-300 font-bold">Eliminar</button>
        </div>
    )
}