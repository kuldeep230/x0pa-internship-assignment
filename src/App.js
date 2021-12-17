import React from "react";
import "./App.css";
import FilterUI from "./components/FilterUI";
import axios from "axios";
import { useState } from "react";
import Header from "./components/Header";
import SearchJob from "./components/SearchJob";
import Footer from "./components/Footer";

function App() {
  const [formData, setFormData] = useState({
    userId: "",
    id: "",
  });
  const [todoTitle, setTodoTitle] = useState("");
  const [completed, setCompleted] = useState(true);
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);
  const [filteredTodo, setFilteredTodo] = useState([]);

  const getTodos = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      let data = res.data;
      setTodos(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //Get current page..
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currenttodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // chage page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterTodos = (formData, completed) => {
    let temp = [];
    for (let i = 0; i < todos.length; i++) {
      if (
        (todos[i].userId === formData.userId &&
          todos[i].id === formData.id &&
          todos[i].completed === completed) ||
        todos[i].title === todoTitle.trim()
      ) {
        temp.push(todos[i]);
      }
    }
    setFilteredTodo(temp);
  };

  return (
    <div className="App">
      <Header />
      <SearchJob />
      <FilterUI
        getTodos={getTodos}
        filteredTodo={filteredTodo}
        filterTodos={filterTodos}
        todos={currenttodos}
        formData={formData}
        setFormData={setFormData}
        completed={completed}
        setCompleted={setCompleted}
        loading={loading}
        todosPerPage={todosPerPage}
        totalTodos={todos.length}
        setCurrentPage={setCurrentPage}
        paginate={paginate}
        currentPage={currentPage}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
      />
      <Footer />
    </div>
  );
}

export default App;
