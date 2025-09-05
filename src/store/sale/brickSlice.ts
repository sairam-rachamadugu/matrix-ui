import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brick } from '../../types';

interface BrickState {
  bricks: Brick[];
  loading: boolean;
  error: string | null;
}

const initialState: BrickState = {
  bricks: [],
  loading: false,
  error: null,
};

const brickSlice = createSlice({
  name: 'bricks',
  initialState,
  reducers: {
    fetchBricksStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBricksSuccess(state, action: PayloadAction<Brick[]>) {
      state.loading = false;
      state.bricks = action.payload;
    },
    fetchBricksFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addBrick(state, action: PayloadAction<Brick>) {
      state.bricks.push(action.payload);
    },
    removeBrick(state, action: PayloadAction<Brick['id']>) {
      state.bricks = state.bricks.filter((brick) => brick.id !== action.payload);
    },
  },
});

export const {
  fetchBricksStart,
  fetchBricksSuccess,
  fetchBricksFailure,
  addBrick,
  removeBrick,
} = brickSlice.actions;

export default brickSlice.reducer;