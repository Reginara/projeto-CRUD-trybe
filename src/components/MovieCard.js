import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id, genre, rating } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h3 className="movie-card-title">{title}</h3>
          <h4 className="movie-card-subtitle">{subtitle}</h4>
          <p className="movie-card-storyline">{storyline}</p>
          <h4 className="genre">{genre}</h4>
          <h5 className="rating">{rating}</h5>
          <Link to={ `/movies/${id}` } className="button">VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
