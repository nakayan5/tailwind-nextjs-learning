import { MICROCMS_API } from ".."

export const useApiClient = () => ({
    async getPokemonList() {
        return {
            data: MICROCMS_API.get(`/pokemons`)
        }
    },

    async getPokemon(data: { id: number }) {
        return {
            data: MICROCMS_API.get(`/pokemon`)
        }
    }
})


export type TApiClient = ReturnType<typeof useApiClient>