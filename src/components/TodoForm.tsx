import React, {useState, FormEvent, ChangeEvent} from 'react';

interface TodoFormProps {
  addTask: AddTask;
};

const TodoForm = ({addTask}: TodoFormProps) => {
  const [newTask, setNewTask] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };

  return (
    <form className='todo-form'>
      <input 
        className='todo-form__input'
        type='text'
        value={newTask}
        onChange={handleChange}
        placeholder='Add a todo'
      />
      <button type='submit' className='todo-button' onClick={handleSubmit}/>
    </form>
  );
};

export default TodoForm;