import React from 'react'
import { useForm } from 'react-hook-form'

import { useDispatch } from 'react-redux'
import { addToDo } from '../../actions'

export default function InputValue () {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm()

  function onSubmit (values) {
    dispatch(addToDo({
      id: values.inputText,
      text: values.inputText
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='inputText' ref={register({ required: true })} />
        {errors.inputText && <p>A value is required for this input</p>}
        <button type='submit'>Cadastrar</button>
      </form>
    </>
  )
}
