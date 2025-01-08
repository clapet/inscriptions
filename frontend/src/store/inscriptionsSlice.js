import { createSlice } from '@reduxjs/toolkit';

const inscriptionsSlice = createSlice({
  name: 'inscriptions',
  initialState: {
    inscriptions: [],
    inscription: null,
  },
  reducers: {
    setInscriptions: (state, action) => {
      state.inscriptions = action.payload;
    },
    setInscription: (state, action) => {
      state.inscription = action.payload;
    },
  },
});

export const { setInscriptions, setInscription } = inscriptionsSlice.actions;
export default inscriptionsSlice.reducer;
