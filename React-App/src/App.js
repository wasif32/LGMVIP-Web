import React, {useState} from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState([]);

  const getUserData = async ()=>{
    const url = "https://reqres.in/api/users?page=1"
    const data = await fetch(url).then(data => data.json());
    const result = data.data;
    setUserData(result);
    console.log(result);
  }
  return (
    <div className="App">
      <h1>USER DATA</h1>
      <button onClick={getUserData}>Get UserData</button>
      <div className='flex-container'>
      {userData.map(({id,first_name,last_name,avatar,email}) => (
          <div className='card'>
            <img key={id} src={avatar} alt={first_name}></img>
            <h1>{first_name + " " +last_name}</h1>
            <p><button id='btn'>Email:{email}</button></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
