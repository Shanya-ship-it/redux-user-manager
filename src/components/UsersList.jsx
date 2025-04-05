import "../main.css";
import user_icon from "../data/user_icon.png";
import { useSelector } from "react-redux";
import EditUserForm from "./EditUserForm";
import { useState } from "react";

import { FixedSizeList as List } from "react-window";

const UsersList = () => {
  const list = useSelector((state) => state.list.list);

  const [visibleForm, setVisibleForm] = useState(false);
  const [selectUser, setSelectUser] = useState(0);

  const handleOnClick = (index) => {
    setVisibleForm(true);
    setSelectUser(index);
  };

  const Row = ({ index, style }) => (
    <div style={style}>
      {
        <div
          className={selectUser === index ? "user__li selected" : "user__li"}
          key={list[index].id + index}
          onClick={() => {
            handleOnClick(index);
          }}
        >
          <img className="user__icon" src={user_icon} alt="user__icon" />
          <span>Пользователь {index + 1}</span>
        </div>
      }
    </div>
  );

  return (
    <>
      <List height={330} itemCount={list.length} itemSize={40} width={300}>
        {Row}
      </List>
      <div>
        {visibleForm && (
          <EditUserForm
            id={list[selectUser].id}
            name={list[selectUser].name}
            jobTitle={list[selectUser].jobTitle}
            department={list[selectUser].department}
            company={list[selectUser].company}
          />
        )}
      </div>
    </>
  );
};

export default UsersList;
