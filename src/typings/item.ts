/**
 * Interface representing an item.
 * @interface
 */
export interface Item {
  itemId: number;
  name: string;
  quote: string;
  quality: number;
  active: boolean;
  charges: number | null;
  chargeInSeconds: boolean;
  texts: {
    base: string | null;
    dlc1: string | null;
    dlc2: string | null;
    dlc3: string | null;
    dlc6: string | null;
    dlc7: string | null;
    dlc8: string | null;
    dlc12: string | null;
    dlc13: string | null;
    dlc14: string | null;
  };
}
