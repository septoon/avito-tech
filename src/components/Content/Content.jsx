import React from 'react';
import classes from './Content.module.css';
import ModalWindow from './ModalWindow/ModalWindow';

const Content = ({imagesUrl, isOpen, toogleIsOpen}) => {
  const openModal = () => {
    toogleIsOpen(true)
  }

  return (
    <div className={classes.content_wrapper}>
      {isOpen && <ModalWindow isOpen={isOpen} toogleIsOpen={toogleIsOpen} />}
      {imagesUrl.map(img => {
        return <div className={classes.image_wrapper}>
          <img onClick={ openModal } className={classes.image} src={img.url} alt={img.id}/>
        </div>
      })}
    </div>
  )
}

export default Content