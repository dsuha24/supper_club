import React from 'react'
import Select from 'react-select'

export default function MultiSelect({ options, name, defaultValue }) {
  return (
    <>
      <Select
        options={options}
        defaultValue={defaultValue}
        isMulti
        name={name}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </>
  )
}
