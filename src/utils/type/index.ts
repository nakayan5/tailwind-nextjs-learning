type Id<T, U extends string> = T & { [key in U]: never }

export type pokemonId = Id<number, 'pokemonId'>