import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import ITEM_DATA from '@data/item.json';

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
      <h2>Page Aside</h2>
      <h3>Selected Item</h3>
      {selectedItem ? (
        <React.Fragment>
          <h4>{selectedItem.name}</h4>
          <ul>
            <li>Type: {selectedItem.active ? 'Active' : 'Passive'}</li>
            <li>Quality: {selectedItem.quality}</li>
            {selectedItem.active ? (
              <li>Charges: {selectedItem.charges}</li>
            ) : null}
          </ul>
        </React.Fragment>
      ) : (
        <p>You haven&apos;t selected an item yet.</p>
      )}
    </aside>
  );
};
