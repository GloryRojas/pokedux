import React, {useEffect} from 'react';
import Searcher from '../../components/Searcher';
import './styles.css';
import PokemonList from "../../components/PokemonList";
import {getPokemons} from "../../api/getPokemons";

function Home() {
    useEffect(() => {
        getPokemons(20).then(e => console.log(e));
    }, [])
  return (
    <div className='Home'>
      <Searcher />
        <PokemonList />
    </div>
  );
}

export default Home;
