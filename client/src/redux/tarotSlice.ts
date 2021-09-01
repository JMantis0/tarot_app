import {
  createAsyncThunk,
  createSlice,
  // PayloadAction
} from "@reduxjs/toolkit";
import {
  RootState,
  //  AppThunk
} from "./store";
import { fetchCount } from "../features/counter/counterAPI";

export interface Card {
  title: string;
  suit: string;
  element: string;
  description: string;
  symbol: string;
  image: string;
}

interface Deck {
  cards: Array<Card>;
}

interface LoginForm {
  userName: string;
  password: string;
}

interface CreateUserForm {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface TarotState {
  loginForm: LoginForm;
  createUserForm: CreateUserForm;
  userNameAvailable: boolean | null;
  deck: Deck;
}

const initialState: TarotState = {
  loginForm: {
    userName: "",
    password: "",
  },
  createUserForm: {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  userNameAvailable: null,
  deck: {
    cards: [
      {
        title: "",
        suit: "",
        element: "",
        description: "",
        symbol: "",
        image: "",
      },
    ],
  },
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// *********************
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const tarotSlice = createSlice({
  name: "tarot",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLoginForm: (state, action) => {
      const fieldName = action.payload.fieldName;
      const value = action.payload.value;
      console.log(`Setting ${fieldName} to ${value}`);
      state.loginForm = { ...state.loginForm, [fieldName]: value };
    },
    setCreateUserForm: (state, action) => {
      const fieldName = action.payload.fieldName;
      const value = action.payload.value;
      console.log(`Setting ${fieldName} to ${value}`);
      state.createUserForm = { ...state.createUserForm, [fieldName]: value };
    },
    setUserNameAvailable: (state, action) => {
      state.userNameAvailable = action.payload;
    },
    setDeck: (state, action) => {
      state.deck.cards = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});

export const {
  setLoginForm,
  setCreateUserForm,
  setUserNameAvailable,
  setDeck,
} = tarotSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTarot = (state: RootState) => state.tarot;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// *************************************************************
// export const incrementIfOdd = (amount: number): AppThunk => (
//   dispatch,
//   getState
// ) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default tarotSlice.reducer;
