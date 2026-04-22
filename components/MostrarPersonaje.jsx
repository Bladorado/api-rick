"use client";

import Chekbox from "@/components/Chekbox";
import { usecheckperson } from "@/store/usecheckperson";

export default function MostrarPersonaje({ personajes }) {

    const seleccionados = usecheckperson((state) => state.seleccionados);

    return (
        <div className="flex gap-10">


            <div>
                {personajes.map((p) => (
                    <Chekbox key={p.id} personaje={p} />
                ))}
            </div>


            <div className="p-4 border rounded w-60">
                <h3 className="font-bold mb-2">Seleccionados</h3>

                {seleccionados.map((p) => (
                    <p key={p.id}>{p.name}</p>
                ))}
            </div>

        </div>
    );
}