import '../styles/MovieCard.scss';
import { ProgressBar } from './ProgressBar';
import { useEffect, useState } from 'react';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import ButtonLikeDislike from './ButtonLikeDislike';
import { FcLike } from 'react-icons/fc';
import { FcDislike } from 'react-icons/fc';

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
 * @returns {MovieCardProps}
 */

export function MovieCard({
  id,
  title,
  category,
  likes,
  dislikes,
}: MovieProps) {
  const [purcentLike, setPurcentLike] = useState(100);
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(likes);
  const [dislike, setDislike] = useState(dislikes);
  const [colorLike, setColorLike] = useState('');
  const [colorDislike, setColorDislike] = useState('');

  let coloringNoClick = '#c8d883';
  let coloringClick = '#d9fb49';

  /* Function to increment and decrement the likes, to change the color of the button according to its state */

  const incrementDecrementLike = () => {
    if (likes === like) {
      if (dislike === dislikes) {
        setLike(likes + 1);
        setColorLike(coloringClick);
        setColorDislike(coloringNoClick);
      } else if (dislike === dislikes + 1) {
        setDislike(dislike - 1);
        setLike(likes + 1);
        setColorLike(coloringClick);
        setColorDislike(coloringNoClick);
      }
    } else if (like === likes + 1 && dislikes === dislike) {
      setLike(likes);
      setColorLike(coloringNoClick);
    }
  };

  /* Function to increment and decrement the dislikes, to change the color of the button according to its state */
  const incrementDecrementDislike = () => {
    if (dislikes === dislike) {
      if (like === likes) {
        setDislike(dislikes + 1);
        setColorDislike(coloringClick);
        setColorLike(coloringNoClick);
      } else if (like === likes + 1) {
        setLike(like - 1);
        setDislike(dislikes + 1);
        setColorLike(coloringNoClick);
        setColorDislike(coloringClick);
      }
    } else if (like === likes && dislikes + 1 === dislike) {
      setDislike(dislikes);
      setColorDislike(coloringNoClick);
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

  const deleteCard = () => {
    setShow(true);
  };

  return (
    <React.Fragment>
      {!show ? (
        <div className="card-container" data-value={id}>
          <h1>{title}</h1>
          <p>{category}</p>
          <div className="card-container__button">
            <ButtonLikeDislike
              changeLike={incrementDecrementLike}
              changeDislike={incrementDecrementDislike}
              styleLike={colorLike}
              styleDislike={colorDislike}
              textLike={
                like <= 1 ? (
                  <span className=" container-likeDislike__span container-likeDislike__span--like">
                    <FcLike /> Like {like}
                  </span>
                ) : (
                  <span className=" container-likeDislike__span container-likeDislike__span--like">
                    <FcLike /> Likes {like}
                  </span>
                )
              }
              textDislike={
                dislike <= 1 ? (
                  <span className=" container-likeDislike__span container-likeDislike__span--dislike">
                    Dislike {dislike} <FcDislike />
                  </span>
                ) : (
                  <span className=" container-likeDislike__span container-likeDislike__span--dislike">
                    Dislikes {dislike} <FcDislike />
                  </span>
                )
              }
            />
          </div>
          <ProgressBar like={purcentLike} />
          <button onClick={deleteCard} className="button-delete">
            <FaTrashAlt />
          </button>
        </div>
      ) : null}
    </React.Fragment>
  );
}
