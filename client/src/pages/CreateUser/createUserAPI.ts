import axios from "axios";
import {
  TarotState,
  setCreateUserForm,
  setUserNameAvailable,
} from "../../redux/tarotSlice";

export const formChangeHandler = (
  event: React.FormEvent<HTMLFormElement>,
  dispatch: Function,
  setRetypePassword: Function
) => {
  const input = event.target as HTMLInputElement;
  if (input.name !== "retypePassword") {
    const fieldName = input.name;
    const value = input.value;
    dispatch(setCreateUserForm({ fieldName, value }));
  } else {
    console.log(`Setting ${input.name} to ${input.value}`);
    setRetypePassword(input.value);
  }
};

export const isUserNameAvailable = (state: TarotState, dispatch: Function) => {
  axios
    .get(
      `http://localhost:8080/api/is_username_available?userName=${state.createUserForm.userName}`
    )
    .then((response) => {
      console.log("Response: ", response);
      dispatch(setUserNameAvailable(response.data));
    })
    .catch((err) => {
      console.log("There was an error: ", err);
    });
};

export const createUser = (state: TarotState) => {
  axios
    .post("http://localhost:8080/api/createuser", state.createUserForm)
    .then((response) => {
      console.log("Response: ", response);
    })
    .catch((err) => {
      console.log("There was an error: ", err);
    });
};
