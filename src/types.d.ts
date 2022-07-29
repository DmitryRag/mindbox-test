type AddTask = (newTask: string) => void;
type RemoveTask = (taskToRemove: Task) => void;

type Task = {
  text: string;
  complete: boolean;
  id: string;
};

type ToggleComplete = (selectedTask: Task) => void;