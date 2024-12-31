import { Platform } from "./usePlatforms";

/**
 * @interface Platform
 * @property {string} id - The unique identifier of the platform.
 * @property {string} name - The name of the platform.
 * @property {string} slug - The slug of the platform.
 */
/**
 * @interface Game
 * @property {number} id - The unique identifier of the game.
 * @property {string} name - The name of the game.
 * @property {string} background_image - The background image URL of the game.
 * @property {{ platform: Platform }[]} parent_platforms - The platforms the game is available on.
 * @property {number} metacritic - The Metacritic score of the game.
 */

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
