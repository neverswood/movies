import '../styles/ProgressBar.scss';

/**
 *Function that displays a gauge to visualize the percentage of number of likes and dislikes
 * @param {number} like - The movie likes
 * @returns {number}
 */

export function ProgressBar({ like }: { like: number }) {
  return (
    <div className="container">
      <progress className="progressbar" value={like} max="100"></progress>
    </div>
  );
}
