import React from "react";
import "./styles/searchTodo.css";

function SearchTodo({
  formData,
  setFormData,
  completed,
  setCompleted,
  todoTitle,
  setTodoTitle,
}) {
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: +e.target.value });
  };

  const handleOnChangeBoolean = () => {
    setCompleted((prev) => !prev);
  };

  const handleOnChangeTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  return (
    <div className="search-container">
      <p className="searchTodoInfo">Search for your Todos</p>
      <form className="searchtodo-form">
        <div className="search-userids searchtodo-inputs">
          <label htmlFor="userId">UserId: </label>
          <input
            name="userId"
            type="number"
            onChange={handleOnChange}
            value={formData.userId}
            placeholder="1-10"
          />
        </div>
        <div className="search-ids searchtodo-inputs">
          <label htmlFor="id">Id: </label>
          <input
            name="id"
            type="number"
            value={formData.id}
            onChange={handleOnChange}
            placeholder="1-200"
          />
        </div>
        <div className="search-title searchtodo-inputs">
          <label htmlFor="id">Title: </label>
          <input
            name="title"
            type="text"
            value={todoTitle}
            onChange={handleOnChangeTitle}
            placeholder="Meeting"
          />
        </div>
        <div className="search-complete-status searchtodo-inputs">
          <span>Completed: </span>
          <input
            type="radio"
            name="completed"
            value={completed}
            onChange={handleOnChangeBoolean}
            checked={completed ? true : false}
          />
          <label htmlFor="completed"> Yes</label>{" "}
          <input
            type="radio"
            name="completed"
            value={completed}
            onChange={handleOnChangeBoolean}
          />
          <label htmlFor="completed"> No</label>
        </div>
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
}

export default SearchTodo;
