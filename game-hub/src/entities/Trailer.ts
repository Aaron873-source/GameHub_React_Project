/**
 * Represents a trailer entity with its details.
 */
export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}
