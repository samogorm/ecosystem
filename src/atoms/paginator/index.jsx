import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ChevronRight, ChevronLeft } from './../../libraries/icons/index';

import './styles.scss';

const Paginator = ({ pages, defaultPage }) => {
  const [currentPage, setCurrentPage] = useState(Number(defaultPage));
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);

  useEffect(() => disableNavButtons(), [currentPage]);

  const firstPage = pages[0];
  const lastPage = pages[pages.length - 1];
  
  const getPreviousPage = () => currentPage !== firstPage ? currentPage - 1 : currentPage;
  const getNextPage = () =>  currentPage !== lastPage ? currentPage + 1 : currentPage;
  const minifiedPages = [getPreviousPage(), currentPage, getNextPage()];

  const isMappable = page => (page !== firstPage) && (page !== lastPage);
  const isCurrentPage = page => page === currentPage;

  const shouldMinifyButtons = () => pages.length > 6;
  const shouldDisplayElipsis = () => shouldMinifyButtons() && (currentPage !== currentPage + 1);
  const shouldDisableButton = page => currentPage === page;

  const getPage = page => isMappable(page) && getPageButton(page);

  const disableNavButtons = () => {
    const shouldDisablePrev = shouldDisableButton(firstPage);
    setIsPrevDisabled(shouldDisablePrev);

    const shouldDisableNext = shouldDisableButton(lastPage);
    setIsNextDisabled(shouldDisableNext);
  };

  const getPageButton = page => {
    return(
      <button
        className={`paginator__button ${isCurrentPage(page) ? 'paginator__button-active' : ''}`}
        onClick={() => setCurrentPage(page)}
      >
        { page }
      </button>
    );
  };

  return(
    <div className="paginator">
      <button
        className={`paginator__button ${isPrevDisabled ? 'paginator__button-disabled' : ''}`}
        onClick={() => setCurrentPage(getPreviousPage())}
      >
        { <ChevronLeft /> }
      </button>
      { getPageButton(firstPage) }
      { shouldDisplayElipsis() && (<span className="paginator__elipsis">...</span>) }
      { shouldMinifyButtons() ? minifiedPages.map(page => getPage(page)) : pages.map(page => getPage(page)) }
      { shouldDisplayElipsis() && (<span className="paginator__elipsis">...</span>) }
      { getPageButton(lastPage) }
      <button
        className={`paginator__button ${isNextDisabled ? 'paginator__button-disabled' : ''}`}
        onClick={() => setCurrentPage(getNextPage())}
      >
        { <ChevronRight /> }
      </button>
    </div>
  );
};

export default Paginator;