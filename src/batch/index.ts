import React from "react"
import { pokeApiClient, TPokeClient } from "@/api/pokemon"
import { useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios";

type Pokemon = {
    name: string,
    url: string
}

type TPokemonList = {
    count: number,
    next: string,
    previous: boolean,
    results: Pokemon[]
}


const usePokemonRepository = () => {
    const apiClient = pokeApiClient();
    return React.useMemo(() => createPokemonRepository(apiClient), [apiClient]);
};

const createPokemonRepository = (apiClient: TPokeClient) => ({
  async getList(): Promise<AxiosResponse<TPokemonList, any> | undefined> {
    try {
        const { data } = await apiClient.getPokemonList()
        return data
    } catch (error) {
        console.log(error);
    }
  },
});

export const usePokemonList = () => {
    const repository = usePokemonRepository();

    return useQuery(['pokeApi'], repository.getList)
}