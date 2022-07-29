import React from 'react';

interface TodoProps {
  task: Task;
  toggleComplete: ToggleComplete;
  removeTask: RemoveTask;
};

const Todo: React.FC<TodoProps> = ({task, toggleComplete, removeTask}) => {
  const onDelete = () => {
    removeTask(task);
  };
  
  return (
    <li className='todo'>
      <label className='todo__label'>
        <input
          className='todo__checkbox'
          type='checkbox'
          onChange={() => toggleComplete(task)}
          checked={task.complete}
        />
        <span className='todo__text'>{task.text}</span>
      </label>
      <button className='todo__btn-delete' onClick={onDelete}/>
    </li>
  );
};

export default Todo;
