import React from 'react'
import TextboxFieldType from './TextboxFieldType'
import DateFieldType from './DateFieldType'
import DropdownFieldType from './DropdownFieldType'

const FieldInformation = ({selectedFeild,addFeild}) => {
  console.log(selectedFeild,addFeild);
  return (
    <>
      {selectedFeild === 'textbox' && <TextboxFieldType addField={addFeild}/>}
      {selectedFeild === 'datepicker' && <DateFieldType addField={addFeild}/>}
      {selectedFeild === 'dropdown' && <DropdownFieldType addField={addFeild}/>}
    </>
  )
}

export default FieldInformation