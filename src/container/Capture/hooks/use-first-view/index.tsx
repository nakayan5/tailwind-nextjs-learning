import { usePokemonList } from "@/batch";
import { useEffect, useState } from "react"

export const useCapture =  () => {
    const { data } = usePokemonList();

    
    useEffect(() => {
        console.log('data --------------', data?.data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}