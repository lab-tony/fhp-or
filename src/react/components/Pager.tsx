import React from 'react';

export default function Pager() {
  return (
    <nav className="or-pager" aria-label="Paginierung">
      <button className="or-pager__button" aria-label="Vorherige Seite">
        ←
      </button>

      <span className="or-pager__info">Seite 1 von 4</span>

      <button className="or-pager__button" aria-label="Nächste Seite">
        →
      </button>
    </nav>
  );
}
