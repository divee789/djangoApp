import axios from "axios";

import { GET_MEMBERS, DELETE_MEMBERS, ADD_MEMBER } from "./types";

export const getMembers = () => (dispatch) => {
  axios
    .get("/api/members")
    .then((res) => {
      dispatch({
        type: GET_MEMBERS,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const deleteMember = (id) => (dispatch) => {
  axios
    .delete(`/api/members/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_MEMBERS,
        payload: id,
      });
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const addMember = (data) => (dispatch) => {
  axios
    .post("/api/members/", data)
    .then((res) => {
      dispatch({
        type: ADD_MEMBER,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error.response);
    });
};
