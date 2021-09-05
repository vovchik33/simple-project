import React from 'react';

const Select = ({options, defaultValue, value, onChange}) => {
  return (
    <select onChange={onChange} value={value}>
      <option disabled={true}>{defaultValue}</option>
      {options.map(({value, name}) => (
        <option key={value} value={value}>{name}</option>
      ))}
    </select>
  );
};

export default Select;
