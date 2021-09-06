import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import MovieForm from '../components/MovieForm';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({
      shouldRedirect: true,
    });
    movieAPI.createMovie(newMovie);
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
