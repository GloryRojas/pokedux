import PokemonCard from "./PokemonCard";
import {Grid} from "semantic-ui-react";

const PokemonList = ({pokemons}) => {

  return(
      <Grid className="Pokemonlist">
          { pokemons.map((pokemon) => (
             <PokemonCard pokemon={pokemon} />
          ))}
      </Grid>
  )
};

export default PokemonList;
