import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import Task from '../components/Task';
import { AppProps, TaskModel } from '../App.types'


const Users: FC<AppProps> = ({ title }) => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    const getTasks = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get('http://localhost:3000/tasks');
        console.log('Task Data: ', data);
        setTasks(data);
      } catch (err) {
        console.error('Error getting users: ', err);
      } finally {
        setIsLoading(false);
      }
    }
    getTasks();
  }, []);


  return (
    <div>
      <h1>{title}</h1>
      {isLoading && <p>...Loading</p>}
      <ul>
        {tasks.map(({ id, title, description, completed }) => {
          return (
            <Task key={id} title={title} description={description} completed={completed} />
          )
        })}
      </ul>
    </div>
  );
};

export default Users;