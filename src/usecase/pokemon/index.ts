// 一覧取得

import { CACHE_KEYS } from "@/api/key"
import { usePokemonRepository } from "@/repository/pokemon"
import { useQuery } from "@tanstack/react-query"

// type UserGetListResponse = { users: User[] }
export const usePokemonList = () => {
  const repository = usePokemonRepository()

  return useQuery<{ list: any }>(
    [CACHE_KEYS.getPokemonList],
    () => repository.getList(null)
  )
}

// 詳細取得
// export type UserGetItemResponse = { user: User }
export const usePokemonItem = () => {
    const repository = usePokemonRepository()

    return useQuery<{ item: any }>(
        [CACHE_KEYS.getPokemon],
        () => repository.getItem(null)
    )
}