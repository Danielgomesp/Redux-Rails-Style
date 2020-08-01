import { ADD_TODO, REMOVE_TODO } from '../constants/toDo'

export function addToDo (payload) {
  return {
    type: ADD_TODO,
    payload: {
      id: payload.id,
      text: payload.text
    }
  }
}

export function removeToDo (payload) {
  return {
    type: REMOVE_TODO,
    payload: {
      id: payload
    }
  }
}
