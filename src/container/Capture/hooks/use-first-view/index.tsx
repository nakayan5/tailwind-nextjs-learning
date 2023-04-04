import { usePokemonList } from "@/batch";
import { useEffect, useState } from "react"

export const useCapture =  () => {
    const { data } = usePokemonList();

    
    useEffect(() => {
        if (data?.data.results && data?.data.results.length > 0) {
            // microcmsにpostする
        }
        console.log('data --------------', data?.data.results);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}