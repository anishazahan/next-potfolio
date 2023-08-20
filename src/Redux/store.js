import { configureStore } from '@reduxjs/toolkit'
import { All_Api } from './api/api'
import projectReducer from './features/projectSlice'


export const store = configureStore({
  reducer: {
    project: projectReducer,
    [All_Api.reducerPath]: All_Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(All_Api.middleware),
})