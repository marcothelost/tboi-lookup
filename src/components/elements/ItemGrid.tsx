import React from 'react';

import type { Item } from '@typings/item';

interface Props {
  items: Item[];
}

export const ItemGrid: React.FC<Props> = ({ items }) => (
  <div className="item-grid">
    {items.length
      ? items.map((item) => (
          <div key={item.itemId} className="item-grid__box">
            <div
              className="item-grid__box__image"
              style={{
                backgroundPositionX: -(item.itemId - 1) * 32,
              }}
            />
          </div>
        ))
      : null}
  </div>
);
