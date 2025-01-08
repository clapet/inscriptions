import { createSlice } from '@reduxjs/toolkit';

const inscriptionsSlice = createSlice({
  name: 'inscriptions',
  initialState: {
    inscriptions: [
      {
        id: 1,
        name: 'Inscription 1',
      },
      {
        id: 2,
        name: 'Inscription 2',
      },
    ],
  },
  reducers: {
    setInscriptions: (state, action) => {
      state.inscriptions = action.payload;
    },
  },
});

export const { setInscriptions } = inscriptionsSlice.actions;
export default inscriptionsSlice.reducer;
