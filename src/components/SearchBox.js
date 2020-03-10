import React from 'react';

import FilterButtons from './FilterButtons';

import '../styles/SearchBox.css';

class SearchBox extends React.Component {

  render() {
    return (
      <div className='search-box-main'>
        <div style={{display: 'flex'}}>
          <input className='search-box-input' type='text' value={this.props.searchInput} onChange={(e) => this.props.setSearchInput(e.currentTarget.value)} />
          <button className='toggle-filters-button' onClick={this.props.toggleFilters}>Filters</button>
        </div>
        <div>
          { this.props.filtersVisible &&
              <FilterButtons 
                typeFilters={this.props.typeFilters}
                weakFilters={this.props.weakFilters}
                toggleTypeFilter={this.props.toggleTypeFilter}
                toggleWeakFilter={this.props.toggleWeakFilter}
              />
          }
        </div>
          
      </div>
    );
  }
}

export default SearchBox;
