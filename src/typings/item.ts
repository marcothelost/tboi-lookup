/**
 * Interface representing an item.
 * @interface
 */
export interface Item {
  itemId: number;
  name: string;
  quality: number;
  active: boolean;
  charges: number | null;
}
