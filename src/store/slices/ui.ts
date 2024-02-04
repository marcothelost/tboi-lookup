import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { Item } from '@typings/item';

interface InitialStateDefaultObject {
  selectedItemId: Item['itemId'] | null;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  selectedItemId: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedItemId: (state, action: PayloadAction<Item['itemId']>) => {
      state.selectedItemId = action.payload;
    },
  },
});

export const { setSelectedItemId } = uiSlice.actions;
