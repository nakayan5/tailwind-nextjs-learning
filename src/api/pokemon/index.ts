import { MICROCMS_API, POKE_API } from "../base"

export const microCmsClient = () => ({
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


export const pokeApiClient = () => ({
    async getPokemonList() {
        return {
            data: POKE_API.get('/pokemon')
        }
    }
})


export type TMicroCmsClient = ReturnType<typeof microCmsClient>
export type TPokeClient = ReturnType<typeof pokeApiClient>