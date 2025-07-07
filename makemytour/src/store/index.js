import { configureStore, createSlice } from '@reduxjs/toolkit';


// ✅ Save user to local storage
const saveUserToLocalStorage = (user) => {
  if (typeof window !== "undefined" && localStorage) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

// ✅ Initial state
const initialState = {
  user: null,
};

// ✅ Create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(action.payload)
      saveUserToLocalStorage(action.payload);
    },
    clearUser: (state) => {
      state.user = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
  },
});

// ✅ Export actions
export const { setUser, clearUser } = userSlice.actions;

// ✅ Create and export store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
