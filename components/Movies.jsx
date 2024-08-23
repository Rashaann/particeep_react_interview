import React from 'react';
import Movie from './Movie';

import styles from "../styles/Home.module.css";

const Movies = ({ movies, onDelete, onToggleLike }) => {

    
  return (
    <div className={styles.movieList}>
      {movies.map(movie => (
        <Movie
          key={movie?.id}
          movie={movie}
          onDelete={onDelete}
          onToggleLike={onToggleLike}
        />
      ))}
    </div>
  );
};

export default Movies;