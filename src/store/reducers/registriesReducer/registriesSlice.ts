import { createSlice } from "@reduxjs/toolkit";
import {
  createRegistry,
  deleteRegistry,
  getRegistries,
} from "./registriesActions";

// todo: fix types usage
interface RegistriesState {
  registries: any;
  isLoading: boolean;
  isCreating: boolean;
  error: any;
}

const initialState: RegistriesState = {
  registries: {},
  isLoading: false,
  isCreating: false,
  error: null,
};

export const registriesSlice = createSlice({
  name: "registries",
  initialState,
  reducers: {
    removeRegistry(state, action) {
      state.registries.data = state.registries.data.filter((registry: any) => {
        return registry.id !== action.payload.id;
      });
    },
    createNewRegistry(state, action) {
      state.registries.data.push(action.payload.data);
    },
  },
  extraReducers: {
    [getRegistries.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getRegistries.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.registries = action.payload;
    },
    [getRegistries.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deleteRegistry.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [createRegistry.pending]: (state) => {
      state.isCreating = true;
      state.error = null;
    },
    [createRegistry.fulfilled]: (state) => {
      state.isCreating = false;
    },
  },
});

export const { removeRegistry, createNewRegistry } = registriesSlice.actions;

export default registriesSlice.reducer;
