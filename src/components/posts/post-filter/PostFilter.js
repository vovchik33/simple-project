import React from 'react';
import Select from "../../ui/select/Select";
import Input from "../../ui/input/Input";

function PostFilter({filter, onChange}) {
  return (
    <div>
      <Select
        onChange={ (e) => onChange({...filter, orderType:e.target.value}) }
        defaultValue="Order by:"
        options={[
          {
            value: 'title',
            name: 'Title'
          },
          {
            value: 'text',
            name: 'Text'
          },
        ]}
        value={filter.orderType}
      />
      <Input
        value={filter.filterStr}
        onChange={(e) => onChange({...filter, filterStr: e.target.value})}
        placeholder="Filter"
      />
    </div>
  );
}

export default PostFilter;