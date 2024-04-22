import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imagesByLocation: {}, // { locationName: [image1, image2, ...] }
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    storeImages: (state, action) => {
      const { locationName, images } = action.payload;
      state.imagesByLocation[locationName] = images;
    },
  },
});

export const { storeImages } = gallerySlice.actions;

export default gallerySlice.reducer;