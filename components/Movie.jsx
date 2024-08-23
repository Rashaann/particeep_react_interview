import React, { useState } from 'react';
import styles from "../styles/Home.module.css";


const Movie = ({ movie, onDelete, onToggleLike }) => {

  if (!movie) return null 
  const { title, category, likes, dislikes } = movie;
  const [liked, setLiked] = useState(null);

  const handleLikeToggle = () => {
    onToggleLike(movie.id, liked === null ? true : !liked);
    setLiked(liked === null ? true : !liked);
  };

  return (
    <div className={styles.movieCard}>
      <div className={styles.btnContainer}>
          <button onClick={() => onDelete(movie.id)} style={{border: 'none', background: 'none', cursor: 'pointer'}}>❌</button>
      </div>
      <h3>{title}</h3>
      <p>{category}</p>
      <div className={styles.gauge}>
        <div style={{ width: `${(likes / (likes + dislikes)) * 100}%`, height: 3 }}>
            {likes} 👍
            <div className={styles.likes} style={{ width: `${(likes / (likes + dislikes)) * 100}%`, height: 3 }}>
            </div>
        </div>
        <div style={{ width: `${(dislikes / (likes + dislikes)) * 100}%`, height: 35 }}>
            {dislikes} 👎
            <div className={styles.dislikes} style={{ width: `${(dislikes / (likes + dislikes)) * 100}%`, height: 3 }}>
            </div>
        </div>
      </div>
      <div className={styles.btnContainer2}>
        <button
            onClick={handleLikeToggle}
            className={styles.likeBtn}
        >
            {liked === true ? 'Dislike' : liked === false ? 'Like' : 'Like/Dislike'}
        </button>
      </div>
    </div>
  );
};

export default Movie;
