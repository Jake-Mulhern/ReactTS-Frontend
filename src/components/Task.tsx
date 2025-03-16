import { FC } from 'react';
import { TaskProps } from '../App.types';

const Task: FC<TaskProps> = ({ title, description, completed }) => {
  return (
    <li>
      <div>
        Task: {title}
      </div>
      <div>Descr: {description}</div>
      <br />
      <div>Completed: {completed.toString()}</div>
      <hr />
    </li>
  );
};

export default Task;
