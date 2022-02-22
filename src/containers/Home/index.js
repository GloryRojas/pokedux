import React, {useEffect} from 'react';
import Searcher from '../../components/Searcher';
import './styles.css';
import PokemonList from "../../components/PokemonList";
import {useDispatch, useSelector} from "react-redux";
import {getPokemonsWithDetails} from "../../redux/actions";

function Home(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemonsWithDetails())
    }, [])
    const { list }  = useSelector(state => state);

  return (
    <div className='Home'>
      <Searcher />
        { list.length ?
        <PokemonList pokemons={list} /> :''
        }
    </div>
  );
}

export default Home;
