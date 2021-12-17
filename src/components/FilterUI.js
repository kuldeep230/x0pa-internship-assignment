import React, { useEffect } from "react";
import Todo from "./Todo";
import SearchTodo from "./SearchTodo";
import "./styles/filterUi.css";
import Pagination from "./Pagination";

const FilterUI = ({
  getTodos,
  filteredTodo,
  filterTodos,
  setFormData,
  formData,
  completed,
  setCompleted,
  todos,
  loading,
  todosPerPage,
  totalTodos,
  paginate,
}) => {
  useEffect(() => {
    getTodos();
    filterTodos(formData, completed);
    //eslint-disable-next-line
  }, [formData, completed]);

  return (
    <div className="filter-container">
      <div className="filter-content-wrapper">
        <div className="filter-search-comp">
          <SearchTodo
            filterTodos={filterTodos}
            formData={formData}
            setFormData={setFormData}
            completed={completed}
            setCompleted={setCompleted}
          />
        </div>
        {/* <p> {filteredTodo.length !== 0 ? "Match Found!!" : "All TODOS"} </p> */}
        <div className="list-todos">
          <Pagination
            todosPerPage={todosPerPage}
            totalTodos={totalTodos}
            paginate={paginate}
          />
          {loading ? (
            <p>Loading...</p>
          ) : filteredTodo.length !== 0 ? (
            filteredTodo.map((todo) => <Todo key={todo.id} todo={todo} />)
          ) : (
            todos.map((todo) => <Todo key={todo.id} todo={todo} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterUI;
