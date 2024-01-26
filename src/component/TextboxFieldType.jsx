import React, { useState } from "react";

const TextboxFieldType = ({ addField }) => {
  const [fieldInformtion, setFieldInformation] = useState({
    fieldName: "",
    fieldDataType: "",
    maxLength: 0,
    isfieldMandatory: false,
    fieldData: "",
  });
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
          <option value="password">Password</option>
        </select>
      </div>
      <div>
        <label id="maxLength">Fixed Max Length Allowed</label>
        <input
          type="number"
          id="maxLength"
          name="maxLength"
          value={fieldInformtion.maxLength}
          onChange={onInputChange}
        />
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
        <label htmlFor="fieldData">fieldData</label>
        <input
          type="fieldData"
          id="fieldData"
          name="fieldData"
          value={fieldInformtion.fieldData}
          onChange={onInputChange}
        />
      </div>
      <button onClick={addInformation}>Confirm</button>
    </div>
  );
};

export default TextboxFieldType;
