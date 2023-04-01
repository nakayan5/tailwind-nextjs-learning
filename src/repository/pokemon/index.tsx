// 外から使われるのはこのhooks。

import { useApiClient, TApiClient } from "@/api/pokemon"
import React from "react"

// 必要なhooksを呼び出してその値をfactory関数に渡しrepositoryを生成して返す。
export const usePokemonRepository = () => {
    const apiClient = useApiClient()
    return React.useMemo(() => createPokemonRepository(apiClient), [apiClient])
  }
  
  // repository本体はfactory関数としてhooksから分離してある。
  // テストが書きやすいのと、Reactに依存しないPureな関数として資産にするため。
export const createPokemonRepository = (apiClient: TApiClient) => ({
  async getList(query: any) {
    // const queryData = convertUserListQueryToData(query)
    const queryData = query
    const { data } = await apiClient.getPokemonList()

    return {
      list: data
    }
  },

  async getItem(id: any) {
    const { data } = await apiClient.getPokemon({ id })

    return {
      item: data
    }
  },
})