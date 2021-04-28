import axios from "axios";

//axios.defaults.headers.common["Token"] = "123456789";
const API_URL = axios.create({
  baseURL: `http://localhost:3001`
});

export function getTodos() {
  console.log(`x`);
  return API_URL.get(`/contacts`, {}); // Config en el segundo param
}

export function deleteTodos(id) {
  return API_URL.delete('/contacts/' + id, null); // Config en el segundo param
  //return API_URL.delete(`/todos/${id}`, {}); // Config en el segundo param
}

export function saveTodo(todo) {
  return API_URL.post(`/contacts/`+ todo,null); // Instancia en el segundo param
}

export function putTodo(todo) {
  return API_URL.put(`/contacts/` + todo, null); // Instancia en el segundo param
  //return API_URL.put(`/todos`, { todo }); // Instancia en el segundo param
}