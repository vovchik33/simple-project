import React from 'react';

import styles from './PostItem.module.css';
import Button from "../../ui/button/Button";

function PostItem({remove, ...props}) {
  const onClickRemove = (e) => {
    e.preventDefault();
    remove(props.id)
  }
  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>{props.index}. {props.title}</strong>
        <div>
          {props.text}
        </div>
      </div>
      <div className={styles.post__controls}>
        <Button>Edit</Button>
        <Button onClick={onClickRemove}>Remove</Button>
      </div>
    </div>
  )
}

export default PostItem;