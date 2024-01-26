import React from "react";
const ShowFieldInformation = ({ fields }) => {
  return (
    <div>
      <h3>List of Added Field</h3>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Field Name</th>
            <th>Field Type</th>
            <th>Field Data Type</th>
            <th>Field Validation</th>
            <th>Field Data</th>
            <th>Is Mandatory</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr>
              <td>{field.no}</td>
              <td>{field.fieldName}</td>
              <td>{field.fieldType}</td>
              <td>{field.fieldDataType}</td>
              <td>
                {field.fieldType === "textbox"
                  ? `Max length: ${field.maxLength}`
                  : field.fieldType === "datepicker"
                  ? `Between ${field.minDate} to ${field.maxDate}`
                  : "nill"}
              </td>
              <td>
                {field.fieldType === "dropdown" ? (
                  <ul>
                    {field.fieldData.map((opt) => (
                      <li>{opt}</li>
                    ))}
                  </ul>
                ) : (
                  field.fieldData
                )}{" "}
              </td>
              <td>
                {field.isfieldMandatory}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowFieldInformation;
