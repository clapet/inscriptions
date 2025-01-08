import { createSlice } from '@reduxjs/toolkit';

const inscriptionsSlice = createSlice({
  name: 'inscriptions',
  initialState: {
    ownerBitcoinAddress: null,
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
    setOwnerBitcoinAddress: (state, action) => {
      state.ownerBitcoinAddress = action.payload;
    },
  },
});

export const { setInscriptions, setInscription, setOwnerBitcoinAddress } =
  inscriptionsSlice.actions;
export default inscriptionsSlice.reducer;
