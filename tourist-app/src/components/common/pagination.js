import React, { Component } from "react";
import _ from "loadsh";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

  const pagesCount = itemsCount / pageSize;
  if (pagesCount === 0) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
