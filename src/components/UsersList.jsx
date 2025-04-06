import "../main.css";
import user_icon from "../data/user_icon2.svg";
import { useSelector } from "react-redux";
import EditUserForm from "./EditUserForm";
import { useState } from "react";

import { FixedSizeList as List } from "react-window";

const UsersList = () => {
  const list = useSelector((state) => state.list.list);

  const [visibleForm, setVisibleForm] = useState(false);
  const [selectUser, setSelectUser] = useState(-1);

  const selectedUser = list[selectUser];

  const handleOnClick = (index) => {
    setVisibleForm(true);
    setSelectUser(index);
  };

  const Row = ({ index, style }) => (
    <div style={{...style, backgroundColor: "white", }}>
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
      <List
        height={350}
        itemCount={list.length}
        itemSize={35}
        width={300}
        style={{ border: "solid 1px rgb(163, 163, 163)" }}
      >
        {Row}
      </List>
      <div>
        {visibleForm && (
          <EditUserForm
            id={selectedUser.id}
            name={selectedUser.name}
            jobTitle={selectedUser.jobTitle}
            department={selectedUser.department}
            company={selectedUser.company}
          />
        )}
      </div>
    </>
  );
};

export default UsersList;
