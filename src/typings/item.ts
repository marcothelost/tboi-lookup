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
  texts: Partial<{
    base: string;
    dlc1: string;
    dlc2: string;
    dlc3: string;
    dlc6: string;
    dlc7: string;
    dlc8: string;
    dlc12: string;
    dlc13: string;
    dlc14: string;
  }>;
  wikiLink: string;
}
