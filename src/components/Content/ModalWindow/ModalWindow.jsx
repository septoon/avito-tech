import React from 'react';
import ReduxForm from './Form/Form';
import classes from './ModalWindow.module.css'

const ModalWindow = props => {

  const closeModal = () => {
    props.toogleIsOpen(false)
  }
  return (
    <div className={classes.modal_wrapper}>
      <div className={classes.close_btn} onClick={ closeModal } >
        <span></span>
        <span></span>
      </div>
      <div className={classes.modal} >
        <div className={classes.image_and_form} >
          <img src="" alt="" className={classes.image} />
          <div className={classes.form_wrapper}>
            <ReduxForm />
          </div>
        </div>
        <div className={classes.comments} >

        </div>
      </div>
    </div>
  )
}

export default ModalWindow
