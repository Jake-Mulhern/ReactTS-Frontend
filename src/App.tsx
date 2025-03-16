import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import User from './components/User';
import { AppProps, UserModel } from './App.types';


const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [username, setUsername] = useState<String>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);


  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await axios.get('https://randomuser.me/api/?results=10');
  //       console.log('User Data: ', data);
  //       setUsers(data.results);
  //     } catch (err) {
  //       console.error('Error getting users: ', err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getUsers();
  // }, []);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('https://randomuser.me/api/?results=10');
      console.log('Getting User Data As Requested: ', data);
      setUsers(data.results);
    } catch (err) {
      console.error('Error Fetching Users: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Show Users</button>
      <input type='text' onChange={handleChange} />
      <div>{username}</div>
      {isLoading && <p>...Loading</p>}
      <ul>
        {users.map(({ login, name, email }) => {
          return (
            <User key={login.uuid} name={name} email={email} />
          )
        })}
      </ul>
    </div>
  );
};

export default App;
