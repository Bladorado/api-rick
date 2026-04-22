import { create } from "zustand";
import { persist } from "zustand/middleware";


export const usecheckperson = create(
    persist((set) => ({
        seleccionados: [],

        toggle: (personaje) =>
            set((state) => {
                const existe = state.seleccionados.find((p) => p.id === personaje.id);

                return {
                    seleccionados: existe
                        ? state.seleccionados.filter((p) => p.id !== personaje.id)
                        : [...state.seleccionados, personaje]
                };
            }),
    }),
        {
            name: 'favoritos-rick', 
        }
    )

)