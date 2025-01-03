/**
 * Represents a Publisher entity.
 *
 * This interface defines the structure of a Publisher object, which includes
 * an identifier and a name. It is used to model the data related to publishers
 * in the Game Hub project.
 *
 * @property {number} id - The unique identifier for the publisher.
 * @property {string} name - The name of the publisher.
 */
export interface Publisher {
  id: number;
  name: string;
}
