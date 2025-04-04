import '../main.css';

import { useSelector } from 'react-redux';

const UsersList = ({handleOnClickUser, selectedUserIndex}) => {

    const list = useSelector(state => state.list.list);

    return (
        <div className='users__list'>
            {list.map((user, index)=>(
            <div className={selectedUserIndex === index ? "user__li selected" : "user__li"} key={user.id + index} onClick={()=> {handleOnClickUser(index)}}>
                {/* <img className="user__icon" src={user_icon} alt='user__icon'/>  */}
                <span>Пользователь {index + 1}</span>
            </div>
          ))}
        </div>
    )

}

export default UsersList;