import React from "react";

const Pagination = ({ pagination, currentPag, setCurrentPag }) => {
  let pags = [];
  for (let i = 1; i <= pagination; i++) {
    pags.push(
      <li key={i} className={currentPag === i - 1 ? "page-item active" : "page-item"}>
        <a className="page-link" href="#" onClick={() => setCurrentPag(i - 1)}>
          {i}
        </a>
      </li>
    );
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            onClick={() => currentPag != 0 && setCurrentPag(currentPag - 1)}
            className="page-link"
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {pags}
        <li className="page-item">
          <a
            className={currentPag==0 ? "page-link" : "page-link disabled"}
            href="#"
            aria-label="Next"
            onClick={() => currentPag != 9 && setCurrentPag(currentPag + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
