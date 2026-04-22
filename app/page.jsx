
import Carta from "@/components/Carta";
import RandomCard from "@/components/RandomCard";
import { consumirApi } from "@/lib/apirickmorthy";




export default async function Home() {

  // const [personajes, setPersonajes] = useState([])

  const objetoApi = await consumirApi()
  const personajes = objetoApi.results
  console.log(personajes)





  return (
    <>
      <h1 className="font-bold text-7xl p-4 text-center">Cards The Rick and Morty</h1>


      {/* <RandomCard personajes={personajes} /> */}

      <div className="bg-amber-50 min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* {personajes.map((personaje) => (
          <Carta key={personaje.id} personajes={personajes} personaje={personaje} setPersonajes={setPersonajes} />
        ))} */}

       


      </div>
    </>
  );
}
