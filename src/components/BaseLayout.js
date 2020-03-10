import React from 'react';

import PokedexHeader from './PokedexHeader';

import '../styles/BaseLayout.css';


class BaseLayout extends React.Component {

  render() {
    return (
      <div className='baselayout-main'>
          <PokedexHeader 
            filtersVisible={this.props.filtersVisible} 
            toggleFilters={this.props.toggleFilters}
            typeFilters={this.props.typeFilters}
            weakFilters={this.props.weakFilters}
            toggleTypeFilter={this.props.toggleTypeFilter}
            toggleWeakFilter={this.props.toggleWeakFilter}
            setSearchInput={this.props.setSearchInput}
            searchInput={this.props.searchInput}
            lightOn={this.props.lightOn}
          />
          <div className='baselayout-content-container'>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default BaseLayout;
