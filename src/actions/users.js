import { CREATE_USER, RETRIEVE_USERS, UPDATE_USER, DELETE_USER, } from "./types";
import userDataService from "../service/userService";

  
  export const createUSER = (name, email, phone) => async (dispatch) => {
    try {
      const res = await userDataService.create({ name, email, phone});
      console.log(res)
  
      dispatch({
        type: CREATE_USER,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveUsers = () => async (dispatch) => {
    try {
      const res = await userDataService.getAll();
      console.log(res.data)
      dispatch({
        type: RETRIEVE_USERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateUser = (id, data) => async (dispatch) => {
    try {
      const res = await userDataService.update(id, data);
  
      dispatch({
        type: UPDATE_USER,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteUser = (id) => async (dispatch) => {
    try {
      await userDataService.delete(id);
  
      dispatch({
        type: DELETE_USER,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllUsers = () => async (dispatch) => {
    try {
      const res = await userDataService.deleteAll();
  
    
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  