import { useState } from "react";

const UserInput = ({labelName, inputName, handleOnCSubmit}) => {


    const [value, setValue] = useState("");
    const handleOnChange = (e) => {
        
        setValue(e.target.value);
        
        const {name, value} = e.target;
        console.log(name, value)

    }

    return(
        <label>
            {labelName}: {inputName}
            <input
            className="inputs"
            name={labelName}
            type="text"
            onChange={handleOnChange}
            onSubmit={handleOnCSubmit}
            value={value}
            />

        </label>
    )
}

export default UserInput;