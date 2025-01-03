
/**
 * Represents a screenshot entity with its properties.
 * 
 * @interface Screenshot
 * @property {number} id - The unique identifier for the screenshot.
 * @property {string} image - The URL or path to the screenshot image.
 * @property {number} width - The width of the screenshot image in pixels.
 * @property {number} height - The height of the screenshot image in pixels.
 */
export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}
