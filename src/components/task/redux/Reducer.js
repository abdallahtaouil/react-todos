import { ADDTASK, DELETETASK, EDITTASK } from "./Actiontype";
const datalist=JSON.parse(localStorage.getItem('list'))

const initialState = {
  list: [
    { id: 1, taskName: "learn react", isDone: false },
    { id: 2, taskName: "learn react hooks", isDone: true },
  ],
};
if(Array.isArray(datalist)){
    initialState.list=datalist
}
console.log(initialState.list)
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      localStorage.setItem("list", JSON.stringify([...state.list, payload]));
      return { ...state, list: [...state.list, payload] };
    case DELETETASK:
        localStorage.setItem('list',JSON.stringify(state.list.filter((e) => e.id !== payload)))

      return { ...state, list: state.list.filter((e) => e.id !== payload) };
    case EDITTASK:
        localStorage.setItem('list',JSON.stringify(state.list.map((e) =>
        e.id === payload.id ? (e = payload.data) : e
      )))
      return {
        ...state,
        list: state.list.map((e) =>
          e.id === payload.id ? (e = payload.data) : e
        ),
      };
    default:
      return state;
  }
};
