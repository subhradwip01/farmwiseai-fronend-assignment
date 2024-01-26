import React, { useState } from "react";

const DropdownFieldType = ({ addField }) => {
  const [fieldInformtion, setFieldInformation] = useState({
    fieldName: "",
    fieldDataType: "",
    isfieldMandatory: false,
    fieldData: [],
  });
  const [option,setOption] = useState("");

  const onOptionChange = (e) =>{
    setOption(e.target.value);
  }
  const addOption = () => {
    setFieldInformation(prev=>{
        return {
            ...prev,
            fieldData:[...prev.fieldData,option]
        }
    })
    setOption("");
  }

  const addInformation = () => {
    addField(fieldInformtion);
  };
  const onInputChange = (e) => {
    setFieldInformation((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div>
      <div>
        <label htmlFor="fieldName">Field Display Name</label>
        <input
          type="text"
          id="fieldName"
          name="fieldName"
          value={fieldInformtion.fieldName}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label htmlFor="fieldDataType">Field Data Type</label>
        <select
          id="fieldDataType"
          name="fieldDataType"
          value={fieldInformtion.fieldDataType}
          onChange={onInputChange}
        >
          <option value={null}>Select Field Data Type </option>
          <option value="number">Number</option>
          <option value="text">String</option>
          <option value="email">Email</option>
        </select>
      </div>
      <div>
        <label htmlFor="isfieldMandatory">Mandatory</label>
        <select
          id="isfieldMandatory"
          name="isfieldMandatory"
          value={fieldInformtion.isfieldMandatory}
          onChange={onInputChange}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="feildData"
        >
          field Data - Options
        </label>
        <input value={option} onChange={onOptionChange} type={fieldInformtion.fieldDataType ? fieldInformtion.fieldDataType : "text"}/>
        <button onClick={addOption}>Add Option Data</button>
      </div>
      <button onClick={addInformation}>Confirm</button>
    </div>
  );
};

export default DropdownFieldType;
