import React from "react";
import "./styles/pagination.css";

const Pagination = ({ todosPerPage, totalTodos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <nav className="pagination-nav">
        <ul>
          {pageNumbers.map((number, index) => (
            <li
              className={`${number === currentPage ? "active" : ""} `}
              key={number}
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
