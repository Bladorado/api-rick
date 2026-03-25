"use client"
import Carta from "@/components/Carta";
import RandomCard from "@/components/RandomCard";
import { useEffect, useState } from "react";



export default function Home() {

  const [personajes, setPersonajes] = useState([])


  useEffect(() => {
    async function consumirApi() {
      try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character")
        const objeto = await respuesta.json()
        console.log(objeto.results)
        setPersonajes(objeto.results)
      } catch (error) {
        console.log("Error: ", error)
      }
    }

    consumirApi()

  }, []);




  return (
    <>
      <h1 className="font-bold text-7xl p-4 text-center">Cards The Rick and Morty</h1>

      <div className="bg-amber-50 min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {personajes.map((personaje) => (
          <Carta key={personaje.id} personajes={personajes} personaje={personaje} setPersonajes={setPersonajes} />
        ))}
      </div>

      <RandomCard />
    </>
  );
}
