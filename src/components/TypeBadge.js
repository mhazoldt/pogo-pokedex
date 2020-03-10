import React from 'react';

import '../styles/TypeBadge.css';


const typeColors = {
    grass: '#7AC74C',
    poison: '#A33EA1',
    fire: '#EE8130',
    flying: '#A98FF3',
    water: '#6390F0',
    bug: '#A6B91A',
    normal: '#A8A77A',
    electric: '#F7D02C',
    ground: '#E2BF65',
    psychic: '#F95587',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    ice: '#96D9D6',
    fighting: '#C22E28',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
}


class TypeBadge extends React.Component {

  render() {

    let weakType = this.props.opts.weakType;
    let selected = this.props.opts.selected || false;

    let badgeStyle = {
        padding: '3px',
        paddingRight: '7px',
        paddingLeft: '7px',
        marginLeft: '5px',
        marginTop: '3px',
        backgroundColor: typeColors[this.props.pokemonType.toLowerCase()],
        borderRadius: '3px',
        color: weakType ? 'hsl(0, 60%, 50%)' : 'white',
        border: weakType ? '1px solid hsl(0, 80%, 50%)' : '1px solid transparent'
    };

    if(this.props.pokemonType === 'Fighting' && weakType) {
        badgeStyle.color = 'hsl(0, 60%, 70%)'
    }

    if(selected) {
      badgeStyle.filter = 'brightness(150%)';
      badgeStyle.border = '1px solid #333';
      badgeStyle.color = '#333';
    }

    if(selected && weakType) {
      badgeStyle.filter = 'brightness(150%)';
      badgeStyle.border = '1px solid black';
      badgeStyle.color = 'black';
    }

    return (
      <div className='type-badge-main' style={badgeStyle}>
          {this.props.pokemonType}
      </div>
    );
  }
}

export default TypeBadge;
