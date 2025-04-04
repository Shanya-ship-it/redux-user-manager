import { useState } from "react";
import '../main.css'
import user_img from './../data/user_img.png'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editSingleUser } from "../store/userListSlice";


const EditUserForm = ({index}) => {


    const list = useSelector(state => state.list.list);
    const su = list[index];


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

    const id = list[index].id

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editSingleUser({id, company: inputCompany, department: inputDepartment, jobTitle: inputJobtitle}));
        setInputJobtitle("");
        setInputCompany("");
        setInputDepartment("");
    }


    return(
        <div className="form">
            <span>{su.name}</span>
            <div className="user__card">
                <img className="user__img" src={user_img} alt="user__img"/>
                <form className="user__form" onSubmit={handleSubmit}>    
                    <label className="labels">
                        <span>JobTitle: {su.jobTitle}</span>
                        <input className="inputs"
                        name="jobTitle"
                        type="text"
                        onChange={handleOnChangeJobtitle}
                        value={inputJobtitle}
                        />
                    </label>
                    <label className="labels">
                        <span>Department: {su.department}</span>
                        <input className="inputs"
                        name="department"
                        type="text"
                        onChange={handleOnChangeDepartment}
                        value={inputDepartment}
                        />
                    </label>
                    <label className="labels">
                        <span>Company: {su.company}</span>
                        <input className="inputs"
                        name="company"
                        type="text"
                        onChange={handleOnChangeCompany}
                        value={inputCompany}
                        />
                    </label>

                    <button className="save__btn" type="submit">Save</button>
                </form>
                
            </div>
            
        </div>
    )
}

export default EditUserForm;