import React, { useEffect, useState } from "react";
import ShowFieldInformation from "./ShowFieldInformation";
import { useDispatch } from "react-redux";
import { addField as addFieldToRedux } from "../redux/action";
import FieldInformation from "./FieldInformation";
const FormCreate = ({ selectedProfession }) => {
  const [fields, setfields] = useState([]);
  const [isAddFiledEnabled, setIsAddFiledEnabled] = useState(false);
  const [selectedFieldType, setSelectedFieldType] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
    onReset();
  },[selectedProfession]);

  const MAX_FIELD = 4;
  const enablefieldAddOption = () => {
    if (fields.length === MAX_FIELD) {
      alert("You have only 4 options");
      return;
    }
    setIsAddFiledEnabled(true);
  };

  const addfield = (field) => {
    const newfields = [...fields];
    field.no = newfields.length + 1;
    field.feildType = selectedFieldType;
    newfields.push(field);
    setfields(newfields);
    setIsAddFiledEnabled(false);
    setSelectedFieldType(null);
  };

  const onConfirm = () => {
    const payload = {
      proffession: selectedProfession,
      fields,
    };
    dispatch(addFieldToRedux(payload));
    onReset();
  };

  const onReset = () => {
    setfields([]);
    setIsAddFiledEnabled(false);
    setSelectedFieldType(null);
  };
  console.log(selectedFieldType);
  return (
    <div>
      <button onClick={enablefieldAddOption}>Add field</button>
      {isAddFiledEnabled && (
        <select
          value={selectedFieldType}
          onChange={(e) => setSelectedFieldType(e.target.value)}
        >
          <option value={null}>Select FieldType</option>
          <option value="textbox">Textbox</option>
          <option value="dropdown">Dropdown</option>
          <option value="datepicker">DatePicker</option>
        </select>
      )}
      {selectedFieldType && (
        <FieldInformation
         addFeild={addfield}
         selectedFeild={selectedFieldType}
        />
      )}
      {fields.length > 0 && (
        <>
          <ShowFieldInformation fields={fields} />
          <button onClick={onReset}>Reset</button>
          <button onClick={onConfirm}>Confirm</button>
        </>
      )}
    </div>
  );
};

export default FormCreate;
