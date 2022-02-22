import React, {useEffect} from 'react';
import Searcher from '../../components/Searcher';
import './styles.css';
import PokemonList from "../../components/PokemonList";
import {getPokemons} from "../../api/getPokemons";
import {useDispatch, useSelector} from "react-redux";
import {setPokemons} from "../../redux/actions";
import axiosInstance from "../../api/config";

function Home(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        getPokemons(20).then(res => {
            const listOfPokemons = res.data.results;
            return Promise.all(
                listOfPokemons.map(pokemon => axiosInstance.get(pokemon.url)))
                .then(result => {
                    const listOfResult = result.map(poke => poke.data);
                    console.log('data', listOfResult)
                    dispatch(setPokemons(listOfResult));
                })})

    }, [])
    const { list } = useSelector(state => state);

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
