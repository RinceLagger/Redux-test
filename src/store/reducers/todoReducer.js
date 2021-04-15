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
