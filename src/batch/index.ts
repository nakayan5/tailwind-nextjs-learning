import React from "react"
import { pokeApiClient, TPokeClient } from "@/api/pokemon"
import { useQuery } from "@tanstack/react-query"


const usePokemonRepository = () => {
    const apiClient = pokeApiClient();
    return React.useMemo(() => createPokemonRepository(apiClient), [apiClient]);
};

const createPokemonRepository = (apiClient: TPokeClient) => ({
  async getList() {
    const { data } = await apiClient.getPokemonList()
    return data
  },
});

export const usePokemonList = () => {
    const repository = usePokemonRepository();

    return useQuery(['pokeApi'], repository.getList)
}