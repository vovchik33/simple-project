import React from 'react';

function PostItem(props) {
  return (
    <div className="post">
      <div className="post_content">
        <strong>{props.index}. {props.title}</strong>
        <div>
          {props.text}
        </div>
      </div>
      <div className="post__controls">
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </div>
  )
}

export default PostItem;