import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import TypeBadge from './TypeBadge';

import '../styles/Details.css';


class Details extends React.Component {

  renderEvolution(evolutions) {
    if(evolutions && evolutions.length > 0) {
      return <NavLink to={`/details/${evolutions[0].num}`}>{evolutions[0].name}</NavLink>
    } else {
      return <div></div>
    }
  }

  renderType(type, opts) {
    return type.map((t, index) => {
      return <TypeBadge key={index} pokemonType={t} opts={opts} />
    })
  }

  render() {
    let pokedexNumber = this.props.match.params.pokedexnumber;


    let pokemon = this.props.pokedex[parseInt(pokedexNumber - 1)] || {
      name: '',
      num: '',
      type: [],
      weaknesses: []
    };

    return (
      <div>
        <div style={{ paddingBottom: '5px' }} onClick={() => window.history.back()}>{'< back'}</div>
        <div className='details-container'>

          <div className='details-main'>
            <div style={{ paddingRight: '5px' }}>#{pokemon.num}</div>
            <div className='details-row'>
              <div>{pokemon.name}</div>
              {this.renderType(pokemon.type, { weakType: false })}
            </div>
            <div></div>
            <div className='details-row' style={{ color: 'hsl(0, 80%, 50%)' }}>Weak Against: {this.renderType(pokemon.weaknesses, { weakType: true })}</div>
            <div></div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>
              <img src={pokemon.img} alt={pokemon.name} />
            </div>
            <div></div>
            <div className='details-row'>height: {pokemon.height}</div>
            <div></div>
            <div className='details-row'>wieght: {pokemon.weight}</div>
            <div></div>
            {
              pokemon.prev_evolution && pokemon.prev_evolution.length > 0
                ? <div className='details-row'>previous evolution: {this.renderEvolution(pokemon.prev_evolution)}</div>
                : <div></div>
            }
            <div></div>
            {
              pokemon.next_evolution && pokemon.next_evolution.length > 0
                ? <div className='details-row'>next evolution: {this.renderEvolution(pokemon.next_evolution)}</div>
                : <div></div>
            }
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Details);
