import React from "react";
import './Pokecard.css';

/*  Shows a single Pokemon with name, image, and type. */

function Pokecard(props) {
    return (
        <div className="Pokecard">
            {}
            <h2>{ props.name }</h2>
                <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png` } alt="pokemon" />
                <p className="type">Type: { props.type }</p>    
                <p className="exp">EXP: { props.experience }</p>
        </div>
    );
};

export default Pokecard;
 