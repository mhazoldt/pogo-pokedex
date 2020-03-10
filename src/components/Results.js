import React from 'react';
import Card from './Card';

import '../styles/Results.css';


class Results extends React.Component {

    applySearch(pokemon, searchInput) {
        if(searchInput && searchInput.length > 0) {
            return pokemon.filter(pkmn => {
                return pkmn.name.toLowerCase().includes(searchInput.toLowerCase());
            })
        } else {
            return pokemon
        }
    }

    applyTypeFilter(pokemon, filters) {
        if(filters && filters.length > 0) {
            return pokemon.filter(pkmn => {

                let typesFound = filters.filter(t => {
                    return pkmn.type.map(pkmnType => pkmnType.toLowerCase())
                        .includes(t.toLowerCase())
                })

                return typesFound.length === filters.length;
            })
        } else {
            return pokemon
        }
    }

    applyWeakFilter(pokemon, filters) {
        if(filters && filters.length > 0) {
            return pokemon.filter(pkmn => {

                let typesFound = filters.filter(t => {
                    return pkmn.weaknesses.map(pkmnType => pkmnType.toLowerCase())
                        .includes(t.toLowerCase())
                })

                return typesFound.length === filters.length;
            })
        } else {
            return pokemon
        }
    }

    renderPokemon(pokemon) {
        return pokemon.map((pkmn, index) => {
            return <Card key={index} pokemon={pkmn} />
        })
    }

    render() {
        let results = this.applySearch(this.props.pokemon, this.props.searchInput);
        results = this.applyTypeFilter(results, this.props.typeFilters);
        results = this.applyWeakFilter(results, this.props.weakFilters);

        return (
            <div className='results-main'>
                { this.props.pokemon &&
                    this.renderPokemon(results)
                }
            </div>
        );
    }
}

export default Results;
