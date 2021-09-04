import React, {useState} from 'react';

import './Editor.css';

function Editor() {
  const [value, setValue] = useState('Some Text');
  return <div className="Editor">
    <span>{value}</span>
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value || '')}
    />
  </div>
}

export default Editor;
