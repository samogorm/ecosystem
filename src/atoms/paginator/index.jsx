import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ChevronRight, ChevronLeft } from './../../libraries/icons/index';

import './styles.scss';

const Paginator = ({ pages, defaultPage }) => {
  const [currentPage, setCurrentPage] = useState(Number(defaultPage));
  const firstPage = pages[0];
  const lastPage = pages[pages.length - 1];
  
  const getPreviousPage = () => currentPage !== firstPage ? currentPage - 1 : currentPage;
  const getNextPage = () =>  currentPage !== lastPage ? currentPage + 1 : currentPage;
  const minifiedPages = [getPreviousPage(), currentPage, getNextPage()];

  const isMappable = page => (page !== firstPage) && (page !== lastPage);
  const isCurrentPage = page => page === currentPage;
  const shouldMinifyButtons = () => pages.length > 6;
  const getPage = page => isMappable(page) && getPageButton(page);

  const getPageButton = page => {
    return(
      <button
        className={isCurrentPage(page) ? 'paginator__button paginator__button-active' : 'paginator__button'}
        onClick={() => setCurrentPage(page)}
      >
        { page }
      </button>
    );
  };

  return(
    <div className="paginator">
      <button
        className="paginator__button"
        onClick={() => setCurrentPage(getPreviousPage())}
      >
        { <ChevronLeft /> }
      </button>
      <strong>{ getPageButton(firstPage) }</strong>
      { shouldMinifyButtons() && (<span className="paginator__elipsis">...</span>) }
      { shouldMinifyButtons() ? minifiedPages.map(page => getPage(page)) : pages.map(page => getPage(page)) }
      { shouldMinifyButtons() && (<span className="paginator__elipsis">...</span>) }
      <strong>{ getPageButton(lastPage) }</strong>
      <button
        className="paginator__button"
        onClick={() => setCurrentPage(getNextPage())}
      >
        { <ChevronRight /> }
      </button>
    </div>
  );
};

export default Paginator;