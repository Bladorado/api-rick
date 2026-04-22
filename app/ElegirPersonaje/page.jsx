import MostrarPersonaje from "@/components/MostrarPersonaje";
import { consumirApi } from "@/lib/apirickmorthy";





export default async function ElegirPersonaje() {

    const objetoApi = await consumirApi()
    const personajes = objetoApi.results
    console.log(personajes)


    return (
        <div>


            <MostrarPersonaje personajes={personajes}/>


        </div>
    )
}   