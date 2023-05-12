import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  numberOfCackes: number;
}

const initialState: InitialState = {
  numberOfCackes: 10,
};

const cakeSlice = createSlice({
  name: "cacke",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCackes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numberOfCackes += action.payload;
    },
  },
});

export const cakeReducer = cakeSlice.reducer;

export const { ordered, restocked } = cakeSlice.actions;
