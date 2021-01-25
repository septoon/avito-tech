import React from 'react';
import classes from '../ModalWindow.module.css'
import { reset, reduxForm, Field } from 'redux-form'

const CommentsForm = props => {
  return (
    <form className={classes.form} onSubmit={props.handleSubmit} >
      <Field placeholder={'Ваше имя'} name={'name'} component='input' />
      <Field placeholder={'Ваш комментарий'} name={'comment'} component='input' />
      <button>Оставить комментарий</button>
    </form>
  )
}

const ReduxForm = reduxForm({ form: 'form' }) (CommentsForm)

const Form = props => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const currentDate = `${day}.${month}.${year}`
  let setComment = (value) => {
    props.addComment(currentDate, value.comment)
  }

  return (
    <div className={classes.form_wrapper}>
      <ReduxForm onSubmit={setComment} />
    </div>
  )
}

export default Form
