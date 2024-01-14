import { ADDTASK, DELETETASK, EDITTASK } from "./Actiontype";

export const addtask = (data) => {
 
  return { type: ADDTASK, payload: data };
  
};

export const deletetask = (id) => {
  return { type: DELETETASK, payload: id };
};
export const edittask = (id, data) => {
  return { type: EDITTASK, payload: { id, data } };
};
