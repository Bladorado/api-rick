export async function consumirApi() {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json()
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error de petición:", error)
    }
}