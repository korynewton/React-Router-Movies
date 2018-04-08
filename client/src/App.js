import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <Route exact to="/" component={MovieList} />
        <Route to="/movie/:id" component={Movie} />
        <SavedList list={this.state.savedList} />
        <div>Replace this Div with your Routes</div>
      </div>
    );
  }
}
