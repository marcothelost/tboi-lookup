import React, { useMemo } from 'react';

import { ItemLayout } from '@layouts/ItemLayout';

import { Icon } from '@components/elements/Icon';
import { ItemGrid } from '@components/elements/ItemGrid';

import ITEM_DATA from '@data/item.json';

import type { Item } from '@typings/item';

export const HomePage: React.FC = () => {
  const activeItems = useMemo(
    () => ITEM_DATA.filter((item: Item) => item.active),
    [ITEM_DATA]
  );
  const passiveItems = useMemo(
    () => ITEM_DATA.filter((item: Item) => !item.active),
    [ITEM_DATA]
  );

  return (
    <ItemLayout title="Home">
      <h1>Home</h1>
      <Icon name="home" />
      <h2>Items</h2>
      <h3>Active Items</h3>
      <ItemGrid items={activeItems} />
      <h3>Passive Items</h3>
      <ItemGrid items={passiveItems} />
    </ItemLayout>
  );
};
