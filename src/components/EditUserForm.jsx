import { useState } from "react";
import '../main.css'
import user_img from './../data/user_img.png'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editSingleUser } from "../store/userListSlice";
import UserInput from "./UserInput";


const EditUserForm = ({id, name, jobTitle, department, company}) => {

    const dispatch = useDispatch();

    const [inputCompany, setInputCompany] = useState("");
    const [inputDepartment, setInputDepartment] = useState("");
    const [inputJobtitle, setInputJobtitle] = useState("");

    const handleOnChangeCompany = (e) => {
        setInputCompany(e.target.value);
    }

     const handleOnChangeDepartment = (e) => {
        setInputDepartment(e.target.value);
    }

     const handleOnChangeJobtitle = (e) => {
        setInputJobtitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editSingleUser({id, company: inputCompany, department: inputDepartment, jobTitle: inputJobtitle}));
        setInputJobtitle("");
        setInputCompany("");
        setInputDepartment("");
    }


    return(
        <div className="form">
            <span>{name}</span>
            <div className="user__card">
                <img className="user__img" src={user_img} alt="user__img"/>
                <form className="user__form" onSubmit={handleSubmit}> 
                    <UserInput labelTitle={"Должность: " + jobTitle} handleOnChange={handleOnChangeJobtitle} inputValue={inputJobtitle}/>
                    <UserInput labelTitle={"Отдел: " + department} handleOnChange={handleOnChangeDepartment} inputValue={inputDepartment}/>
                    <UserInput labelTitle={"Компания: " + company} handleOnChange={handleOnChangeCompany} inputValue={inputCompany}/>
                    <button className="save__btn" type="submit">Save</button>
                </form>
                
            </div>
            
        </div>
    )
}

export default EditUserForm;