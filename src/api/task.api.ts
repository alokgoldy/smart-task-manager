import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchTasks = async () =>{
    const res = await api.get("/todos?_limit=10");
    return res.data;
}