import React from 'react';
import Results from './Results';


class Home extends React.Component {

  render() {
    return (
      <div>
          <Results 
            pokemon={this.props.pokedex}
            typeFilters={this.props.typeFilters}
            weakFilters={this.props.weakFilters}
            searchInput={this.props.searchInput}
          />
      </div>
    );
  }
}

export default Home;
