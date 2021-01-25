import React from 'react';
import Comments from './Comments/Comments';
import Form from './Form/Form';
import classes from './ModalWindow.module.css'

const ModalWindow = props => {

  const closeModal = () => {
    props.toggleIsOpen(false)
  }
  return (
    <div className={classes.modal_wrapper}>
      <div className={classes.close_btn} onClick={ closeModal } >
        <span></span>
        <span></span>
      </div>
      <div className={classes.modal} >
        <div className={classes.image_and_form} >
          <img src={props.url} alt="image" className={classes.image} />
          <div className={classes.form_wrapper}>
            <Form addComment={props.addComment} />
          </div>
        </div>
        <div className={classes.comments} >
          <Comments comments={props.comments} />
        </div>
      </div>
    </div>
  )
}

export default ModalWindow
