import React from 'react';

/**
 * Get the corresponding DLC image element based on the given DLC string.
 *
 * @param {string} dlcString - The DLC identifier string.
 * @returns {React.ReactElement | null} The React element representing the DLC image, or null if not found.
 */
export const getDlcImage = (dlcString: string): React.ReactElement | null => {
  switch (dlcString) {
    case 'dlc1':
      return (
        <img
          src="/dlc/dlc1.png"
          alt="Removed in Afterbirth"
          title="Removed in Afterbirth"
        />
      );
    case 'dlc2':
      return (
        <img
          src="/dlc/dlc2.png"
          alt="Added in Afterbirth / Removed in Afterbirth †"
          title="Added in Afterbirth / Removed in Afterbirth †"
        />
      );
    case 'dlc3':
      return (
        <img
          src="/dlc/dlc3.png"
          alt="Removed in Afterbirth †"
          title="Removed in Afterbirth †"
        />
      );
    case 'dlc6':
      return (
        <img
          src="/dlc/dlc6.png"
          alt="Added in Afterbirth / Removed in Repentance"
          title="Added in Afterbirth / Removed in Repentance"
        />
      );
    case 'dlc7':
      return (
        <img
          src="/dlc/dlc7.png"
          alt="Removed in Repentance"
          title="Removed in Repentance"
        />
      );
    case 'dlc8':
      return (
        <img
          src="/dlc/dlc8.png"
          alt="Added in Repentance"
          title="Added in Repentance"
        />
      );
    case 'dlc12':
      return (
        <img
          src="/dlc/dlc12.png"
          alt="Added in Afterbirth †"
          title="Added in Afterbirth †"
        />
      );
    case 'dlc13':
      return (
        <img
          src="/dlc/dlc13.png"
          alt="Removed in Afterbirth / Re-added in Afterbirth †"
          title="Removed in Afterbirth / Re-added in Afterbirth †"
        />
      );
    case 'dlc14':
      return (
        <img
          src="/dlc/dlc14.png"
          alt="Added in Afterbirth"
          title="Added in Afterbirth"
        />
      );
    default:
      return null;
  }
};
