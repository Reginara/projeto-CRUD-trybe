import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    movieAPI.getMovie(id)
      .then((data) => {
        this.setState({ movie: data, loading: false });
      })
      .catch((error) => console.log(error));
  }

  deleteMovie() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match } = this.props;
    const { id } = match.params;

    if (loading) return <Loading />;
    return (
      <section data-testid="movie-details" className="movie-list">
        <div>
          <h2 className="movie-details-title">{ `Title: ${title}` }</h2>
          <h3 className="movie-details-subtitle">{ `Subtitle: ${subtitle}` }</h3>
        </div>
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } className="details-image" />
          <p className="movie-details-storyline">{ `Storyline: ${storyline}` }</p>
          <h3 className="movie-details-genre">{ `Genre: ${genre}` }</h3>
          <h4 className="movie-details-rating">{ `Rating: ${rating}` }</h4>
          <Link to={ `/movies/${id}/edit` } className="button">EDITAR</Link>
          <Link to="/" className="button">VOLTAR</Link>
          <Link to="/" onClick={ this.deleteMovie } className="button">DELETAR</Link>
        </div>
      </section>
    );
  }
}

MovieDetails.propTypes = ({
  match: PropTypes.objectOf(PropTypes.array),
  id: PropTypes.number,
}).isRequired;

export default MovieDetails;
