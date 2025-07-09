import axios from "axios";

export const registerNewUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const res = await axios.post(
      "http://localhost:3000/api/users/register",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "USER_REGISTER_SUCCESS", payload: res.data });
    console.log(res);
  } catch (err) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: err.message });
    console.log(err);
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const res = await axios.post(
      "http://localhost:3000/api/users/login",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem('currentUser' , JSON.stringify(res.data))
    window.location.href = '/'
    console.log(res);
  } catch (err) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: err.message });
    console.log(err);
  }
};
