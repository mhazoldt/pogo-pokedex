import React from 'react';

import TypeBade from './TypeBadge';

const types = [
  'grass',
  'poison',
  'fire',
  'flying',
  'water',
  'bug',
  'normal',
  'electric',
  'ground',
  'psychic',
  'rock',
  'ghost',
  'dragon',
  'ice',
  'fighting',
  'dark',
  'steel',
  'fairy'
]


class FilterButtons extends React.Component {

  render() {
    return (
      <div>
        <div style={{color: 'white', paddingTop: '5px'}}>Types</div>
        {types.map((t, index) => {
          return (
            <div key={index} style={{display: 'inline-block'}} onClick={() => {
              this.props.toggleTypeFilter(t)
            }} >
              <TypeBade pokemonType={t} opts={{ weakType: false, selected: this.props.typeFilters.includes(t) }} />
            </div>
            
          )
        })}
        <div style={{paddingTop: '5px'}}>Weak Against</div>
        {types.map((t, index) => {
          return (
            <div key={index} style={{display: 'inline-block'}} onClick={() => {
              this.props.toggleWeakFilter(t)
            }} >
              <TypeBade pokemonType={t} opts={{ weakType: true, selected: this.props.weakFilters.includes(t) }} />
            </div>
            
          )
        })}
      </div>
    );
  }
}

export default FilterButtons;
