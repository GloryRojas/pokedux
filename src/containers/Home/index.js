import React, {useEffect} from 'react';
import Searcher from '../../components/Searcher';
import './styles.css';
import PokemonList from "../../components/PokemonList";
import {getPokemons} from "../../api/getPokemons";
import {useDispatch, useSelector} from "react-redux";
import {setPokemons} from "../../redux/actions";

function Home(props) {
    const dispatch = useDispatch();
    const { list } = useSelector(state => state);

    useEffect(() => {
        getPokemons(20).then(res => {
            dispatch(setPokemons(res.data.results));
        });
    }, [])

  return (
    <div className='Home'>
      <Searcher />
        <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
