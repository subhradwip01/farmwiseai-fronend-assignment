import React, { useState } from "react";

const DateFieldType = ({ addField }) => {
  const [fieldInformtion, setFieldInformation] = useState({
    fieldName: "",
    fieldDataType: "date",
    minDate: "",
    maxDate: "",
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
          <option value="date">Date</option>
        </select>
      </div>
      <div>
        <div>
          <label id="minDate">Date range Validation</label>
          <input type="date" id="minDate" name="minDate" />
        </div>
        <div>
          <label id="maxDate">Date range Validation</label>
          <input type="date" id="maxDate" name="maxDate" />
        </div>
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
          value={fieldInformtion.fieldData}
          onChange={onInputChange}
          type="date"
          id="fieldData"
          name="fieldData"
        />
      </div>
      <button onClick={addInformation}>Confirm</button>
    </div>
  );
};

export default DateFieldType;
