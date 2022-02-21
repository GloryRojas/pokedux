import React from 'react';
import Searcher from '../../components/Searcher';
import './styles.css';
import PokemonList from "../../components/PokemonList";

function Home() {
  return (
    <div className='Home'>
      <Searcher />
        <PokemonList />
    </div>
  );
}

export default Home;
