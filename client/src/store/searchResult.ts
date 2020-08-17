import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { GITHUB_SEARCH_API } from "../config/config";

const slice = createSlice({
  name: "githubSearch",
  initialState: {
    isSearching: false,
    data: [],
    error: null,
  },
  reducers: {
    getSearchResults: (state, action) => {
      state.data = action.payload.data;
      state.isSearching = action.payload.isSearching;
      state.error = action.payload.error;

    },
  },
});

// method
export const { getSearchResults } = slice.actions;

// reducer
export default slice.reducer;

export const searchGithub = (search: string, type: string) => {
  const requestBody = {
    search: search,
    type: type,
  };

  return async (dispatch: Dispatch) => {
    try {
      if (search.length < 3) {
        dispatch(getSearchResults({ data: [], isSearching: false,error:null }));
      } else {
        dispatch(getSearchResults({ data: [], isSearching: true }));
        const { data } = await axios.post(GITHUB_SEARCH_API, requestBody);
        dispatch(getSearchResults({ data: data.data, isSearching: false,error:null }));
      }
    } catch (error) {

        dispatch(getSearchResults({ data: [], isSearching: false, error:error }));

    }
  };
};
