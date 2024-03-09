import React from "react";
import Pokedex from "./Pokedex";

/** takes list of 8 pokemon 
 * and randomly assign them into two hands of 4 
 * cards each. It should then render 
 * two Pokedex components, one for each hand. */

function Pokegame(props) {
    let handOne = [];
    let handTwo = [];
    let pokemons = [...props.pokemon];

    pokemons.sort(() => Math.random() - 0.5);
    pokemons.forEach(pokemon => {
            if(handOne.length < 4){
                handOne.push(pokemon)
            } else {
                handTwo.push(pokemon)
            };
    });
    let handOneExp = handOne.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let handTwoExp = handTwo.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
        <div className="Pokegame">
            <h1> Pokedex </h1>
            <Pokedex pokemon={handOne} exp={handOneExp} isWinner={handOneExp > handTwoExp} />
            <Pokedex pokemon={handTwo} exp={handTwoExp} isWinner={handOneExp < handTwoExp} />
        </div>
    );
};

Pokegame.defaultProps = {
    pokemon : [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
  }

export default Pokegame;