import { createSlice } from '@reduxjs/toolkit';

const inscriptionsSlice = createSlice({
  name: 'inscriptions',
  initialState: {
    inscriptions: [],
  },
  reducers: {
    setInscriptions: (state, action) => {
      state.inscriptions = action.payload;
    },
  },
});

export const { setInscriptions } = inscriptionsSlice.actions;
export default inscriptionsSlice.reducer;
