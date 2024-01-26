import React, { useState } from "react";
import { useSelector } from "react-redux";
import DisplayForm from "../component/DispalyForm";
import FormCreate from "../component/FormCreate";

const DashBoard = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const proffessionFeildInformation = useSelector(
    (state) => state.fieldReducer
  );

  console.log(proffessionFeildInformation);
  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value={null}>Select your proffession</option>
        <option value="student">Student</option>
        <option value="self-employeed">Self Employed</option>
        <option value="business">Business</option>
      </select>
      {selectedValue &&
        (proffessionFeildInformation[selectedValue] ? (
          <DisplayForm
          fields={proffessionFeildInformation[selectedValue].fields}
          selectedProfession={selectedValue}
          />
        ) : (
          <FormCreate selectedProfession={selectedValue} />
        ))}
    </div>
  );
};

export default DashBoard;
