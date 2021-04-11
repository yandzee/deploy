import { configureStore } from '@reduxjs/toolkit';

import { cats } from './cats';
import { likes } from './likes';

export const store = configureStore({
  reducer: {
    cats: cats.reducer,
    likes: likes.reducer,
  }
})
