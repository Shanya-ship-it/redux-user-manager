
const UserInput = ({ labelTitle, onChange, inputValue }) => {
  return (
    <label className="labels">
      <span>{labelTitle}</span>
      <input
        className="inputs"
        name=""
        type="text"
        onChange={onChange}
        value={inputValue}
      />
    </label>
  );
};

export default UserInput;
