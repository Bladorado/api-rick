"use client"
import { usecheckperson } from "@/store/usecheckperson"

export default function Chekbox({ personaje }) {

    const toggle = usecheckperson(state => state.toggle)
     const seleccionados = usecheckperson(state => state.seleccionados)

    const isChecked = seleccionados.some(p => p.id === personaje.id);



    return (
        <div className="p-4 border rounded bg-gray-50 w-64">
            <label className="flex items-center gap-2 mb-1">
                <input
                    type="checkbox"
                    className="accent-blue-500"
                      checked={isChecked}
                    onChange={() => toggle(personaje)} />
                <span>{personaje.name}</span>
            </label>
        </div>
    )
}