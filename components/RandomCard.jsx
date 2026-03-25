"use client"

import { useEffect, useState } from "react"

export default function RandomCard({ personajes }) {

    const [personajeActual, setPersonajeActual] = useState(null);



    const seleccionarPersonajeAleatorio = (nombre) => {

        if(personajes.length === 0) return;

        const indiceAleatorio = Math.floor(Math.random() * personajes.length);

        const nuevoPersonaje = personajes[indiceAleatorio];

        setPersonajeActual(nuevoPersonaje)

}
    useEffect(() => {

        if(personajeActual.length > 0)

   [] })

    return (
        <div>
            <button onClick={seleccionarPersonajeAleatorio}>Click Cambiar</button>
            <div>
                {
                    personajeActual && (
                        <p>{personajeActual.nombre}</p>
                    
                    )
                }

            </div>
        </div>
    )
}