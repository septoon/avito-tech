import React from 'react';
import classes from './Form.module.css'
import { reduxForm } from 'redux-form'

const Form = props => {
  return (
    <form className={classes.form} onSubmit={props.handleSubmit} >
      <input placeholder={'Ваше имя'} name={'name'} />
      <input placeholder={'Ваш комментарий'} name={'comment'} />
      <button>Оставить комментарий</button>
    </form>
  )
}

const ReduxForm = reduxForm({ form: 'form' }) (Form)

export default ReduxForm



// const Login = (props) => {
//     const submitFormData = formData => {
//         let {email, password, rememberMe} = formData
//         props.login(email, password, rememberMe)
//         console.log(formData)
//     }

//     if(props.isAuth) return <Redirect to='/profile' />
//     return (
//         <div>
//             <h1>Login</h1>
//             <LoginReduxForm onSubmit={submitFormData} />
//         </div>
//     )
// }
