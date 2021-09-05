import React from 'react';

function PostButton({children, ...props}) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}

export default PostButton;