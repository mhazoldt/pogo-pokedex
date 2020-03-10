import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BaseLayout from './BaseLayout';
import Home from './Home';
import Details from './Details';

import '../styles/App.css';

const pokemonInfoUrl = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';


class App extends React.Component {

  state = {
    pokedex: [],
    searchInput: '',
    typeFilters: [],
    weakFilters: [],
    filtersVisible: false,
    lightOn: false,
    lightTimeoutId: null
  }


  toggleFilters = () => {
    this.setState({ filtersVisible: !this.state.filtersVisible })
  }

  toggleTypeFilter = type => {
    let currentFilters = this.state.typeFilters.slice(0);
    let typeIndex = currentFilters.indexOf(type);
    let alreadySelected = typeIndex > -1;

    if(alreadySelected) {
      currentFilters.splice(typeIndex, 1);
    } else {
      currentFilters.push(type);
    }

    this.setState({typeFilters: currentFilters});
  }

  toggleWeakFilter = type => {
    let currentFilters = this.state.weakFilters.slice(0);
    let typeIndex = currentFilters.indexOf(type);
    let alreadySelected = typeIndex > -1;

    if(alreadySelected) {
      currentFilters.splice(typeIndex, 1);
    } else {
      currentFilters.push(type);
    }

    this.setState({weakFilters: currentFilters});
  }

  setSearchInput = text => {
    this.setState({ searchInput: text, lightOn: true })
    this.turnLightOff();
  }

  turnLightOff() {
    if(this.state.lightTimeoutId) {
      clearTimeout(this.state.lightTimeoutId);
    }

    let lightTimeoutId = setTimeout(() => this.setState({lightOn: false, lightTimeoutId: null}), 1000)
    this.setState({lightTimeoutId})
  }

  initializeState() {
    fetch(pokemonInfoUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ pokedex: data.pokemon })
        console.log('this the result: ', data.pokemon);
      });
  }

  componentDidMount() {
    this.initializeState();
  }

  render() {
    return (
      <div>
        <Router>
          <BaseLayout 
            filtersVisible={this.state.filtersVisible} 
            toggleFilters={this.toggleFilters}
            typeFilters={this.state.typeFilters}
            weakFilters={this.state.weakFilters}
            toggleTypeFilter={this.toggleTypeFilter}
            toggleWeakFilter={this.toggleWeakFilter}
            setSearchInput={this.setSearchInput}
            searchInput={this.state.searchInput}
            lightOn={this.state.lightOn}
          >
            <Switch>
              <Route exact path="/details/:pokedexnumber" component={() => <Details pokedex={this.state.pokedex} />} />
              <Route path="/" component={() => {
                return <Home 
                  pokedex={this.state.pokedex} 
                  typeFilters={this.state.typeFilters}
                  weakFilters={this.state.weakFilters}
                  searchInput={this.state.searchInput}
                />
              }} />
            </Switch>
          </BaseLayout>
        </Router>
      </div>
    );
  }
}

export default App;
