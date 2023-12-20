import { SimplePokemon } from ".."
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {

    return (

        <div className="flex flex-wrap gap-10 items-start justify-center">
            {
                pokemons.map( pokemon => (

                    <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
                    // <Image
                    //     key={ pokemon.id }
                    //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg`}
                    //     width={ 100 }
                    //     height={ 100 }
                    //     alt={ pokemon.name }
                    // />
                    // <span key={pokemon.id}>asdasd</span>
                ))
            }
        </div>
    )
}
