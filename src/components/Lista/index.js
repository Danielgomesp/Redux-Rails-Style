import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToDo } from '../../actions/ToDoActions'

export default function Lista () {
  const { toDo } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <ul>
      {
        toDo.map(value => (
          <li key={value.id}>
            <p>{value.text} <span onClick={() => dispatch(removeToDo(value.id))}>(remove)</span></p>
          </li>
        ))
      }
    </ul>
  )
}
