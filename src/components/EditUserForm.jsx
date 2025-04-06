import { useEffect, useState } from "react";
import "../main.css";
import user_img from "./../data/user_img2.svg";
import { useDispatch } from "react-redux";
import { editSingleUser } from "../store/userListSlice";
import UserInput from "./UserInput";

const EditUserForm = ({ id, name, jobTitle, department, company }) => {
  const dispatch = useDispatch();

  const [inputCompany, setInputCompany] = useState(company);
  const [inputDepartment, setInputDepartment] = useState(department);
  const [inputJobtitle, setInputJobtitle] = useState(jobTitle);
  const [inputName, setInputName] = useState(name);

  useEffect(() => {
    setInputName(name);
    setInputCompany(company);
    setInputDepartment(department);
    setInputJobtitle(jobTitle);
  }, [id, name, company, department, jobTitle]);

    const handleChangeName = (e) => {
      setInputName(e.target.value);
    };

  const handleChangeCompany = (e) => {
    setInputCompany(e.target.value);
  };

  const handleChangeDepartment = (e) => {
    setInputDepartment(e.target.value);
  };

  const handleChangeJobtitle = (e) => {
    setInputJobtitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editSingleUser({
        id,
        name: inputName,
        company: inputCompany,
        department: inputDepartment,
        jobTitle: inputJobtitle,
      })
    );
  };

  return (
    <div className="form">
      <UserInput
        onChange={handleChangeName}
        inputValue={inputName}
        />
      <div className="user__card">
        <img className="user__img" src={user_img} alt="user__img" />
        <form className="user__form" onSubmit={handleSubmit}>
          <UserInput
            labelTitle={"Должность: "}
            onChange={handleChangeJobtitle}
            inputValue={inputJobtitle}
          />
          <UserInput
            labelTitle={"Отдел: "}
            onChange={handleChangeDepartment}
            inputValue={inputDepartment}
          />
          <UserInput
            labelTitle={"Компания: "}
            onChange={handleChangeCompany}
            inputValue={inputCompany}
          />
          <button className="save__btn" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserForm;
