import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveForm } from "../redux/reducer";
const DisplayForm = ({ fields, selectedProfession }) => {
  const [formValues, setFormValues] = useState(new Map());
  const updateDispatch = useDispatch();

  useEffect(() => {
    const map = new Map();
    for (let i = 0; i < fields.length; i++) {
      map.set(
        fields[i].no.toString(),
        fields[i].fieldType !== "dropdown"
          ? fields[i].fieldData
          : fields[i].choosen
      );
    }
    setFormValues(map);
  }, [fields]);

  const submitHandler = (e) => {
    e.preventDefault();
    let updatedFeilds = [...fields];
    console.log(updatedFeilds);
    for (let i = 0; i < fields.length; i++) {
      const id = fields[i]["no"].toString();
      const val = formValues.get(id);
      console.log(val);
      console.log(updatedFeilds[i]);
      if (fields[i].fieldType !== "dropdown") {
        updatedFeilds[i] = {...updatedFeilds[i], fieldData: val};
      } else {
        updatedFeilds[i]={...updatedFeilds[i],choosen: val};
      }
      console.log(updatedFeilds[i]);
    }
    const payload = {
      selectedProfession,
      fields:[...updatedFeilds],
    };
    updateDispatch(saveForm(payload))
    alert("Success!",payload);
  };
  const onChange = (e) => {
    const newForms = new Map(formValues);
    newForms.set(e.target.id, e.target.value);
    console.log(newForms);
    setFormValues(newForms);
  };
  console.log(formValues);
  return (
    <div>
      <form onSubmit={submitHandler}>
        {fields.map((field) =>
          field.fieldType === "textbox" ? (
            <div>
              <lable>{field.fieldName}</lable>
              <input
                type={field.fieldDataType}
                id={field.no}
                required={field.isfieldMandatory === "true"}
                value={formValues.get(field.no.toString())}
                onChange={onChange}
                maxLength={field.maxLength}
              />
            </div>
          ) : field.fieldType === "datepicker" ? (
            <div>
              <lable>{field.fieldName}</lable>
              <input
                type="date"
                id={field.no}
                required={field.isfieldMandatory === "true"}
                value={formValues.get(field.no.toString())}
                onChange={onChange}
                min={field.minDate}
                max={field.maxDate}
              />
            </div>
          ) : (
            <select
              data-type="dropdown"
              onChange={onChange}
              id={field.no}
              value={formValues.get(field.no.toString())}
            >
              <option>Select {field.fieldName}</option>
              {field.fieldData.map((opt) => (
                <option value={opt}>{opt}</option>
              ))}
            </select>
          )
        )}
        <button onSubmit={submitHandler}>Submit</button>
      </form>
    </div>
  );
};

export default DisplayForm;
