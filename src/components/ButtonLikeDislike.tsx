import { ReactNode } from 'react';
import '../styles/ButtonLikeDislike.scss';

type ButtonLikeDislikeProps = {
  changeLike: React.MouseEventHandler<HTMLButtonElement>;
  changeDislike: React.MouseEventHandler<HTMLButtonElement>;
  textLike: ReactNode;
  textDislike: ReactNode;
  styleLike: string;
  styleDislike: string;
};

/**
 * Function to show like and dislike buttons
 * @param {React.MouseEventHandler<HTMLButtonElement>} changeLike - OnClick to increment, decrement the likes and change the color of the button according to its state
 * @param {React.MouseEventHandler<HTMLButtonElement>} changeDislike - OnClick to increment, decrement the dislikes and change the color of the button according to its state
 * @param {ReactNode} textLike - Text displayed in the like button
 * @param {ReactNode} textDislike - Text displayed in the dislike button
 * @param {string} styleLike - The color of the like button
 * @param {string} styleDislike - The color of the dislike button
 * @returns {ButtonLikeDislikeProps}
 */

export default function ButtonLikeDislike({
  changeLike,
  changeDislike,
  textLike,
  textDislike,
  styleLike,
  styleDislike,
}: ButtonLikeDislikeProps) {
  return (
    <div className="container-likeDislike">
      <button
        onClick={changeLike}
        style={{ backgroundColor: styleLike }}
        className="container-likeDislike__button container-likeDislike__button--like"
      >
        {textLike}
      </button>
      <button
        onClick={changeDislike}
        style={{ backgroundColor: styleDislike }}
        className="container-likeDislike__button container-likeDislike__button--dislike"
      >
        {textDislike}
      </button>
    </div>
  );
}
