import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUserInfoFromGit } from "../api/userApi";

const USER_DATA_REQUEST_DEFAULT_STATUS = {
  isPending: false,
  isError: false,
  errorMessage: ''
}

const initialState = {
  userInputValue: '',
  userData: null,
  userDataRequestStatus: USER_DATA_REQUEST_DEFAULT_STATUS
}

export const fetchUserDataRequest = createAsyncThunk(
  'user/fetchUserDataRequest',
  async (_, { getState, rejectWithValue}) => {
    try {
      const { user } = getState();

      const response = await fetchUserInfoFromGit(user.userInputValue)
      return response
    }
    catch (error) {
      return rejectWithValue('User not found');
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInputValue: (state, action) => {
      state.userInputValue = action.payload
    }
  },
  extraReducers: {
    [fetchUserDataRequest.pending]: (state) => {
      state.userDataRequestStatus.isPending = true;
      state.userDataRequestStatus.isError = false;
      state.userDataRequestStatus.errorMessage = '';
    },
    [fetchUserDataRequest.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.userDataRequestStatus.isPending = false;
      state.userDataRequestStatus.isError = false;
      state.userDataRequestStatus.errorMessage = '';
    },
    [fetchUserDataRequest.rejected]: (state, action) => {
      state.userDataRequestStatus.isPending = false;
      state.userDataRequestStatus.isError = true;
      state.userDataRequestStatus.errorMessage = action.payload;
      state.userData = null;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUserInputValue } = userSlice.actions

export default userSlice.reducer