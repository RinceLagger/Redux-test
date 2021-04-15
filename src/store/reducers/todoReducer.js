import {useMemo} from "react";
import {useDispatch} from "react-redux"

const initialState = {
  loading: false,
  todos: [],
};

const ADD_TODO = "ADD_TODO";
const SET_LOADING = "SET_LOADING";
const REMOVE_TODO = "REMOVE_TODO";

export function todoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo != action.payload),
      };
    default:
      return state;
  }
}

const addTodoAction = todo =>({type:ADD_TODO, payload: todo});
const setLoadingAction = todo =>({type:SET_LOADING, payload: todo});


const buildHandlers = dispatch => ({
  addTodo: todo => dispatch(addTodoAction(todo)),
  setLoading: loading => dispatch(setLoadingAction(loading))
})

export function useTodosHandlers(){
  const dispatch = useDispatch();
  const handlers = useMemo(()=> buildHandlers(dispatch),[dispatch]);
  return handlers;
}