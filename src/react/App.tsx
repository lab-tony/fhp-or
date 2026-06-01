import React from 'react';
import { type JSX, useEffect, useState } from 'react';
import News from './components/News';

export interface IWordPressPost {
  title: { rendered: string };
  date: string;
  excerpt: { rendered: string };
  link: string;
}

export default function App(): JSX.Element {
  const [newsData, setNewsData] = useState<IWordPressPost[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        'https://openrewi.org/wp-json/wp/v2/posts?_fields=title,date,excerpt,link'
      );

      if (!res.ok) {
        throw new Error('Failed to fetch news');
      }

      const data: IWordPressPost[] = await res.json();
      setNewsData(data);
    };

    fetchNews();
  }, []);

  return (
    <News
      newsData={newsData}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      direction={direction}
      setDirection={setDirection}
    />
  );
}
