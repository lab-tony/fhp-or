import React from 'react';

interface PagerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pager({
  currentPage,
  totalPages,
  onPageChange,
}: PagerProps) {
  return (
    <nav className="or-pager" aria-label="Paginierung">
      <button
        className="or-pager__button"
        aria-label="Vorherige Seite"
        onClick={() => onPageChange(currentPage - 1)}
      >
        ←
      </button>

      <span className="or-pager__info">
        Seite {currentPage + 1} von {totalPages}
      </span>

      <button
        className="or-pager__button"
        aria-label="Nächste Seite"
        onClick={() => onPageChange(currentPage + 1)}
      >
        →
      </button>
    </nav>
  );
}
