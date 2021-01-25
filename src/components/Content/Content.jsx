import React from 'react';
import classes from './Content.module.css';
import ModalWindow from './ModalWindow/ModalWindow';

const Content = (props) => {

  return (
    <div className={classes.content_wrapper}>
      {props.isOpen && <ModalWindow isOpen={props.isOpen}
                                    url={props.url}
                                    toggleIsOpen={props.toggleIsOpen}
                                    comments={props.comments}
                                    addComment={props.addComment} />}
      {props.imagesUrl.map(img => {
        return <div className={classes.image_wrapper}>
          <img onClick={ () => {
              props.toggleIsOpen(true)
              props.setBigImageUrl(img.url)
          } } className={classes.image} src={img.url} alt={img.id}/>
        </div>
      })}
    </div>
  )
}

export default Content