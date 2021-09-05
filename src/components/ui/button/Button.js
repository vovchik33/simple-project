import React from 'react';

import styles from './Button.module.css';

function Button({children, onClick, ...props}) {
  return (
    <button
      className={styles.button}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;