import React from 'react';

interface PagerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  setDirection: (dir: 'next' | 'prev') => void;
  isAnimating: boolean;
}

export default function Pager({
  currentPage,
  totalPages,
  onPageChange,
  setDirection,
  isAnimating,
}: PagerProps) {
  return (
    <nav className="or-pager" aria-label="Paginierung">
      <button
        className={`or-pager__button ${isAnimating ? 'js-animating' : ''}`}
        aria-label="Vorherige Seite"
        disabled={currentPage === 0}
        onClick={() => {
          setDirection('prev');
          onPageChange(currentPage - 1);
        }}
      >
        ←
      </button>

      <span className="or-pager__info">
        Seite {currentPage + 1} von {totalPages}
      </span>

      <button
        className={`or-pager__button ${isAnimating ? 'js-animating' : ''}`}
        aria-label="Nächste Seite"
        disabled={currentPage >= totalPages - 1}
        onClick={() => {
          setDirection('next');
          onPageChange(currentPage + 1);
        }}
      >
        →
      </button>
    </nav>
  );
}
