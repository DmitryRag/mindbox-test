import React from 'react';
import {FILTER_MAP} from '../App';
import Todo from './Todo';

interface TodoListProps {
  tasks: Array<Task>;
  toggleComplete: ToggleComplete;
  removeTask: RemoveTask;
  filter: keyof typeof FILTER_MAP;
};

export const TodoList: React.FC<TodoListProps> = ({tasks, toggleComplete, removeTask, filter}) => {
  return (
    <ul className='todo-list__list'>
     {tasks.filter(FILTER_MAP[filter])
      .map((task) => (
        <Todo
        task={task}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
      />
    ))}
    </ul>
  );
};