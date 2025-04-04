
import UsersList from './components/UsersList';
import EditUserForm from './components/EditUserForm';

import { useState } from 'react';

import './main.css';

function App() {

  const [selectedUserIndex, setSelectedUserIndex] = useState(0);
  const [selectAndVisible, setSelectAndVisible] = useState(false, 0);


  const handleOnClickUser = (index)=>{

    setSelectAndVisible(true, setSelectedUserIndex(index));
  }

  return (
    <div className="App">
        <UsersList handleOnClickUser={handleOnClickUser} selectedUserIndex={selectedUserIndex}/>
        {selectAndVisible && <EditUserForm index={selectedUserIndex}/>}
    </div>
  );
}

export default App;
