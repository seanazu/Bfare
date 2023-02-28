import { createSlice } from '@reduxjs/toolkit' ;

const initialState = {
  user: {
    fullName:'',
    email:'',
    password:''
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addFullName: (state, action) => {
      state.user.fullName = action.payload
    },
    addEmail: (state, action) => {
      state.user.email = action.payload
    },
    addPassword: (state, action) => {
      state.user.password = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFullName, addEmail, addPassword } = userSlice.actions ;

export const selectUserData = (state) => state.user ;

export default userSlice.reducer ;