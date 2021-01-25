import React from 'react';
import classes from './Comments.module.css'

const Comments = props => {
  
  return (
    <div className={classes.comments_wrapper} >
      {props.comments.map(c => {
        return <div className={classes.comment_item}>
          <span className={classes.date} >{c.date}</span>
          <span className={classes.comment} >{c.text}</span>
        </div>
      })}
    </div>
  )
}

export default Comments
