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
}

export default function News({ newsData }: NewsProps): JSX.Element {
  const sectionTitle: string = 'Aktuelles';

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
        {newsData.map((news, index) => (
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
      <Pager />
    </>
  );
}
