import React from 'react';

import styles from "./Input.module.css";

function Input(props) {
  return (
    <input
      className={styles.input}
      type="text"
      {...props}
    />
  );
}

export default Input;