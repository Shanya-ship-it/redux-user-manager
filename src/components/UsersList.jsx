import '../main.css';
import user_icon from '../data/user_icon.png'

import { useSelector } from 'react-redux';
import EditUserForm from './EditUserForm';
import { useState } from 'react';

const UsersList = () => {

    const list = useSelector(state => state.list.list);

    const [visibleForm, setVisibleForm] = useState(false);
    const [selectUser, setSelectUser]  = useState(0);

    
    const handleOnClick = (index)=>{
        setVisibleForm(true);
        setSelectUser(index); 
    }

    return (
        <>
            <div className='users__list'>
                    {list.map((user, index)=>(
                        <div className={selectUser === index ? "user__li selected" : "user__li"} key={user.id + index} onClick={()=> {handleOnClick(index)}}>
                            <img className="user__icon" src={user_icon} alt='user__icon'/> 
                            <span>Пользователь {index + 1}</span>
                        </div>
                    ))}
            </div>
            <div>
                {visibleForm && 
                <EditUserForm 
                    id={list[selectUser].id} 
                    name={list[selectUser].name}
                    jobTitle={list[selectUser].jobTitle}
                    department={list[selectUser].department}
                    company={list[selectUser].company}
                />}
            </div>
        </>
    )

}

export default UsersList;