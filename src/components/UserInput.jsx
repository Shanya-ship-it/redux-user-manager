import { useState } from "react";

const UserInput = ({ labelTitle, handleOnChange, inputValue }) => {
  return (
    <label className="labels">
      <span>{labelTitle}</span>
      <input
        className="inputs"
        name=""
        type="text"
        onChange={handleOnChange}
        value={inputValue}
      />
    </label>
  );
};

export default UserInput;
