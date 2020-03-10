import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchBox from './SearchBox';

import '../styles/PokedexHeader.css';


class PokedexHeader extends React.Component {

  render() {
    return (
      <div className='pokedex-header-main'>
        <div className='pokedex-light-circles'>
          <NavLink to='/'><div className={`blue-circle${this.props.lightOn ? ' light-on' : '' }`}></div></NavLink>
          <div style={{height: '30px'}}>
              <div className='red-circle'></div>
              <div className='yellow-circle'></div>
              <div className='green-circle'></div>
          </div>
        </div>
        <div className='search-box-filter-container'>
          <SearchBox 
            filtersVisible={this.props.filtersVisible}
            toggleFilters={this.props.toggleFilters}
            typeFilters={this.props.typeFilters}
            weakFilters={this.props.weakFilters}
            toggleTypeFilter={this.props.toggleTypeFilter}
            toggleWeakFilter={this.props.toggleWeakFilter}
            setSearchInput={this.props.setSearchInput}
            searchInput={this.props.searchInput}
          />
        </div>
      </div>
    );
  }
}

export default PokedexHeader;
