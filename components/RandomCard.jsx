"use client"

import { useEffect, useState } from "react"

export default function RandomCard({ personajes }) {

    const [personajeActual, setPersonajeActual] = useState(null);



    const seleccionarPersonajeAleatorio = () => {

        if (personajes.length > 0) {

            const indiceAleatorio = Math.floor(Math.random() * personajes.length);

            const nuevoPersonaje = personajes[indiceAleatorio];

            setPersonajeActual(nuevoPersonaje)
        }


    }
    useEffect(() => {

        if (personajes.length > 0) {
            seleccionarPersonajeAleatorio();
        }

    }, [personajes])

    return (
        <div className="flex flex-col items-center gap-3">
            <div>
                <button onClick={seleccionarPersonajeAleatorio}
                    className="bg-green-300 p-4 font-bold rounded ">Click Cambiar</button>
            </div>
            <div className="">
                {
                    personajeActual && (
                        <>
                            <p>{personajeActual.name}</p>
                            <img
                                src={personajeActual.image}
                                alt={personajeActual.name}
                                className="w-[200px] h-48 object-cover rounded-xl mb-3"
                            />
                        </>

                    )
                }
            </div>


        </div>

    )
}