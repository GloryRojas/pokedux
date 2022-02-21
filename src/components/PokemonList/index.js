import PokemonCard from "./PokemonCard";
import {Grid} from "semantic-ui-react";

const PokemonList = () => {
  const pokemons = Array(20).fill('');

  return(
      <Grid className="Pokemonlist">
          { pokemons.map((pokemon) => (
             <PokemonCard { ...pokemon } />
          ))}
      </Grid>
  )
};

export default PokemonList;
