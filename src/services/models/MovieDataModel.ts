type Movie = {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
};

/** Class representing a model for movie data */

export default class MovieDataModel {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  /**
   * Create movie data model.
   * @param {Movie} data - The data value
   */
  constructor(data: Movie) {
    this.id = data.id;
    this.title = data.title;
    this.category = data.category;
    this.likes = data.likes;
    this.dislikes = data.dislikes;
  }
}
