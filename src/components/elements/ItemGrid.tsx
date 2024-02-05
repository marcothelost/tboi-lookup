import React from 'react';
import { useDispatch } from 'react-redux';

import { setSelectedItemId } from '@store/slices/ui';

import type { Item } from '@typings/item';

interface Props {
  items: Item[];
}

export const ItemGrid: React.FC<Props> = ({ items }) => {
  const dispatch = useDispatch();

  const handleSelect = (itemId: Item['itemId']) => {
    dispatch(setSelectedItemId(itemId));
  };

  return (
    <div className="item-grid">
      {items.length
        ? items.map((item) => (
            <div key={item.itemId} className="item-grid__box">
              <div
                className="item-grid__box__image"
                style={{
                  backgroundPositionX: -(item.itemId - 1) * 36,
                }}
                title={item.name}
                onClick={() => handleSelect(item.itemId)}
              />
            </div>
          ))
        : null}
    </div>
  );
};
