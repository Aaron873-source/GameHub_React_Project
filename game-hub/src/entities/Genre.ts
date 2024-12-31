/**
 * Interface representing a Genre object.
 *
 * @interface Genre
 * @property {number} id - The unique identifier for the genre.
 * @property {string} name - The name of the genre.
 * @property {string} image_background - The URL of the background image associated with the genre.
 *
 */

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
