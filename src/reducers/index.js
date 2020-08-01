import { combineReducers } from 'redux'
import { toDoReducer } from './toDoReducer'

const rootReducers = combineReducers({
  toDo: toDoReducer
})

export default rootReducers
