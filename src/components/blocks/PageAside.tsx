import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import ITEM_DATA from '@data/item.json';

import { getDlcImage } from '@utils/dlc';

import type { RootState } from '@store/base';
import type { Item } from '@typings/item';

export const PageAside: React.FC = () => {
  const { selectedItemId } = useSelector((state: RootState) => state.ui);
  const selectedItem = useMemo<Item | null>(
    () => ITEM_DATA.find((item) => item.itemId === selectedItemId) || null,
    [selectedItemId]
  );

  return (
    <aside className="page-aside">
      {selectedItem ? (
        <React.Fragment>
          {(selectedItem.active &&
            !selectedItem.chargeInSeconds &&
            selectedItem.charges) ||
          0 > 0 ? (
            <div className="page-aside__charges">
              {Array.from({ length: selectedItem.charges || 0 }, (_, index) => (
                <div key={index} className="page-aside__charges__bar" />
              ))}
            </div>
          ) : null}
          <div
            className="page-aside__item"
            style={{
              backgroundPositionX: -(selectedItem.itemId - 1) * 64,
            }}
            title={selectedItem.name}
          />
          <h4 className="page-aside__title">{selectedItem.name}</h4>
          <p className="page-aside__description">{selectedItem.quote}</p>
          <ul>
            {Object.keys(selectedItem.texts).map((key, index) =>
              selectedItem.texts[key as keyof Item['texts']] ? (
                <li key={index}>
                  {getDlcImage(key)}
                  {selectedItem.texts[key as keyof Item['texts']]}
                </li>
              ) : null
            )}
          </ul>
        </React.Fragment>
      ) : (
        <p>You haven&apos;t selected an item yet.</p>
      )}
    </aside>
  );
};
