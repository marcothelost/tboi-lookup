import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { ItemGrid } from '@components/elements/ItemGrid';

export const HomePage: React.FC = () => (
  <DefaultLayout title="Home">
    <h1>Home</h1>
    <h2>Items</h2>
    <h3>Active Items</h3>
    <ItemGrid
      items={[
        {
          itemId: 118,
          name: 'Brimstone',
          quality: 4,
          active: false,
          charges: null,
        },
      ]}
    />
    <h3>Passive Items</h3>
    <ItemGrid
      items={[
        {
          itemId: 636,
          name: 'R Key',
          quality: 4,
          active: true,
          charges: 0,
        },
      ]}
    />
  </DefaultLayout>
);
