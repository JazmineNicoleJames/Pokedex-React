import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

/* An array of objects describing different Pokemon
  Renders a sequence of Pokecard components
*/

const Pokedex = (props) => {
  let winMsg;
  if(props.isWinner){
    winMsg = "THIS HAND WINS!";
  }

  return (
    <div className="Pokedex">
      {props.pokemon.map(pokemon => (
        <Pokecard 
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          experience={pokemon.base_experience} />
      ))}
        <p className="winningMsg"> {winMsg} </p>
    </div>
  )
}


export default Pokedex;