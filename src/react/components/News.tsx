import React from 'react';
import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';
import Pager from './Pager';
import type { IWordPressPost } from '../App';

interface NewsProps {
  newsData: IWordPressPost[];
  currentPage: number;
  onPageChange: (page: number) => void;
  direction: 'next' | 'prev' | null;
  setDirection: (dir: 'next' | 'prev') => void;
}

export default function News({
  newsData,
  currentPage,
  onPageChange,
  direction,
  setDirection,
}: NewsProps): JSX.Element {
  const sectionTitle: string = 'Aktuelles';

  // Might be a configurable value in a real application
  const maxItems = 3;
  const animationDuration = 300;

  // Process data by state
  const start = currentPage * maxItems;
  const visibleNews = newsData.slice(start, start + maxItems);
  const totalPages = Math.ceil(newsData.length / maxItems);

  const truncateExcerpt = (description: string, maxLength: number): string => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength) + ' ...';
  };

  const listRef = useRef<HTMLUListElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // animation effect
  useEffect(() => {
    console.log('component mounted');
    const newsListEl = listRef.current;
    if (!newsListEl || !direction) return;

    const className = direction === 'next' ? 'js-slide-left' : 'js-slide-right';

    newsListEl.classList.add(className);
    newsListEl.classList.add('js-animating');
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      newsListEl.classList.remove(className);
      newsListEl.classList.remove('js-animating');
      setIsAnimating(false);
    }, animationDuration);

    return () => {
      console.log('component unmounted');
      clearTimeout(timeout);
    };
  }, [currentPage, direction]);

  return (
    <>
      <h2 className="or-section__title">{sectionTitle}</h2>
      <div className="or-news">
        <ul className="or-news__list" ref={listRef}>
          {visibleNews.map((news, index) => (
            <li className="or-news__item" key={`news-${index}`}>
              <h3 className="or-news__title">{news.title.rendered}</h3>
              <time dateTime={news.date} className="or-news__date">
                {news.date}
              </time>
              <p className="or-news__desc">
                {truncateExcerpt(news.excerpt.rendered, 96)}
              </p>
              <a href={news.link} className="or-news__link">
                Mehr erfahren
              </a>
            </li>
          ))}
        </ul>
        {/* Conditional rendering */}
        {totalPages > 1 && (
          <Pager
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            setDirection={setDirection}
            isAnimating={isAnimating}
          />
        )}
      </div>
    </>
  );
}
