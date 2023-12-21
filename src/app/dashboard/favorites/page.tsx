import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { Pokemon } from '../../../pokemons/interfaces/pokemon';

export async function generateMetadata() {
    return {
        title: 'Favorite Pokemons',
        description: 'List of favorite pokemons',
    }
}

export default async function PokemonsPage() {


    return (
        <div className="flex flex-col">

            <span className="text-5xl m-2">Pokemons Favorites <small className="text-blue-500">Global state</small></span>

            <PokemonGrid pokemons={ [] } />
        </div>
    );
}