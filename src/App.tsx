import React, {useState} from 'react';
import './App.css';
import FilterButton from './components/FilterButton';
import TodoForm from './components/TodoForm';
import { TodoList } from './components/TodoList';

export const FILTER_MAP = {
  All: () => true,
  Active: (task: Task) => !task.complete,
  Completed: (task: Task) => task.complete
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');

  const addTask: AddTask = newTask => {
    if (newTask !== '') {
      let id = Math.random().toString(16).slice(2)
      setTasks([...tasks, { text: newTask, complete: false, id: id}]);
    };
  };

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTasks = tasks.map(task => {
      if (task === selectedTodo) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask: RemoveTask = taskToRemove => {
    let updatedTask: Array<Task> = tasks.filter(task => task.id !== taskToRemove.id);
    setTasks(updatedTask)
  };

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      // @ts-ignore
      setFilter={setFilter}
      isPressed={name === filter}
    />
  ));

  return (
    <div className='app'>
      <div className='app__content'>
        <h1 className='app__header'>To-do list</h1>
        <div className='app__container'>
          <TodoForm addTask={addTask}/>
          <TodoList tasks={tasks} toggleComplete={toggleComplete} removeTask={removeTask} filter={filter}/>
        </div>
        <div className='app__filters'>
          {filterList}
        </div>
      </div>
    </div>
  );
};

export default App;