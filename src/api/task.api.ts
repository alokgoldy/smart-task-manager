import axios from "axios";
import { Task } from "../features/tasks/task.types";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchTasks = async () =>{
    const res = await api.get("/todos?_limit=10");
    return res.data;
}

export const toggleTask = async (task: Task): Promise<Task> => {
  const res = await api.patch(`/todos/${task.id}`, {
    completed: !task.completed
  });
  return res.data;
}