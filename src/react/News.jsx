import React from 'react';

export default function News() {
  const sectionTitle = 'Aktuelles';
  const newsData = [
    {
      title: 'News-Titel',
      date: '19. Mai 2016',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      link: '#',
      linkText: 'Mehr erfahren',
    },
    {
      title: 'News-Titel',
      date: '4. Februar 2016',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      link: '#',
      linkText: 'Mehr erfahren',
    },
    {
      title: 'News-Titel',
      date: '12. Januar 2016',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      link: '#',
      linkText: 'Mehr erfahren',
    },
  ];

  const truncateDescription = (description, maxLength) => {
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
    </>
  );
}
