import { createSlice } from '@reduxjs/toolkit' ;

const initialState = {
  user: {
    fullName:'',
    email:'',
    password:'', 
    phoneNumber:''
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
    addPhoneNumber: (state, action) => {
      state.user.phoneNumber = action.payload
    },
    addUser: (state, action) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFullName, addEmail, addPassword, addPhoneNumber, addUser } = userSlice.actions ;

export const selectUserData = (state) => state.user ;

export default userSlice.reducer ;