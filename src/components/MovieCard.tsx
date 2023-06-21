import { ToggleButtonLikeDislike } from './ToggleButtonLikeDislike';
import '../styles/MovieCard.scss';
import { ProgressBar } from './ProgressBar';
import { ChangeEvent, useEffect, useState } from 'react';
import React from 'react';

type MovieProps = {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
};

/**
 * Function that displays the elements of a movie in a card
 * @param {string} id - The movie id
 * @param {string} title - The movie title
 * @param {string} category - The movie category
 * @param {number} likes - The movie likes
 * @param {number} dislikes - The movie dislikes
 * @returns {MovieCard}
 */

export function MovieCard({
  id,
  title,
  category,
  likes,
  dislikes,
}: MovieProps) {
  const [purcentLike, setPurcentLike] = useState(100);
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(likes);
  const [dislike, setDislike] = useState(dislikes);

  /* Incrment, decrement likes and dislikes */
  const onClick = () => {
    if (!check) {
      setLike(likes + 1);
      if (dislike === dislikes + 1) {
        setDislike(dislike - 1);
      }
    } else if (check) {
      if (like === likes + 1) {
        setLike(like - 1);
        setDislike(dislike + 1);
      } else if (like == likes) {
      }
    }
  };

  /* Gauge display representing likes and dislikes */
  useEffect(() => {
    if (dislikes === 0 || dislikes === null) {
      return setPurcentLike(100);
    } else {
      return setPurcentLike((likes / (likes + dislikes)) * 100);
    }
  }, []);

  const deleteCard = (e: any) => {
    setShow(true);
    if (show === true) {
    }
  };

  return (
    <React.Fragment>
      {!show ? (
        <div className="card-container" data-value={id}>
          <h2>{id}</h2>
          <h1>{title}</h1>
          <p>{category}</p>
          <div className="card-container__button">
            <ToggleButtonLikeDislike
              check={check}
              onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                setCheck(e.target.checked);
              }}
              onClick={onClick}
            />
          </div>
          <div className="card__likesdislikes">
            <span>{like}</span>
            <span>{dislike}</span>
          </div>
          <ProgressBar like={purcentLike} />
          <button onClick={deleteCard}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ) : null}
    </React.Fragment>
  );
}
