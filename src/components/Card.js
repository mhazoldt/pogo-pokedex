import React from 'react';
import { NavLink } from 'react-router-dom';

import TypeBadge from './TypeBadge';

import '../styles/Card.css';


class Card extends React.Component {

    renderType(type, opts) {
        return type.map((t, index) => {
            return <TypeBadge key={index} pokemonType={t} opts={opts} />
        })
    }

    render() {
        let pokemon = this.props.pokemon || {
            name: '',
            num: '',
            type: [],
            weaknesses: []
        };

        return (
            <NavLink to={`/details/${pokemon.num}`} style={{textDecoration: 'none'}} >
                <div className='card-container'>
                    <div className='card-main'>
                        <div style={{paddingRight: '5px'}}>#{pokemon.num}</div>
                        <div className='card-row'>
                            <div>{pokemon.name}</div>
                            {this.renderType(pokemon.type, { weakType: false })}
                        </div>
                        <div></div>
                        <div className='card-row' style={{color: 'hsl(0, 80%, 50%)'}}>Weak Against: {this.renderType(pokemon.weaknesses, { weakType: true })}</div>
                    </div>
                </div>
            </NavLink>
            
        );
    }
}

export default Card;
