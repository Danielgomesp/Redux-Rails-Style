import { ADD_TODO, REMOVE_TODO } from '../constants/toDo'

const toDoInitialState = []

export function toDoReducer (state = toDoInitialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ]
    case REMOVE_TODO: {
      const newState = state.filter(item => item.id !== action.payload.id)
      return newState
    }
    default:
      return state
  }
}
