import React from 'react';
import type { JSX } from 'react';
import Pager from './Pager';

export interface INewsItem {
  title: string;
  date: string;
  description: string;
  link: string;
  linkText: string;
}

interface NewsProps {
  newsData: INewsItem[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function News({
  newsData,
  currentPage,
  onPageChange,
}: NewsProps): JSX.Element {
  const sectionTitle: string = 'Aktuelles';

  // Might be a configurable value in a real application
  const maxItems = 3;

  // Process data by state
  const start = currentPage * maxItems;
  const visibleNews = newsData.slice(start, start + maxItems);
  const totalPages = Math.ceil(newsData.length / maxItems);

  const truncateDescription = (
    description: string,
    maxLength: number
  ): string => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength) + ' ...';
  };

  return (
    <>
      <h2 className="or-section__title">{sectionTitle}</h2>
      <ul>
        {visibleNews.map((news, index) => (
          <li className="or-news" key={`news-${index}`}>
            <h3 className="or-news__title">{news.title}</h3>
            <time dateTime={news.date} className="or-news__date">
              {news.date}
            </time>
            <p className="or-news__desc">
              {truncateDescription(news.description, 96)}
            </p>
            <a href={news.link} className="or-news__link">
              {news.linkText}
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
        />
      )}
    </>
  );
}
