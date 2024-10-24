import React from 'react';
import { Article } from "../interfaces/Article";

interface ArticleListProps {
  currentItems: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ currentItems }) => {
  return (
    <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
      {currentItems.map((article) => (
        <article className="p-4 mb-6 md:w-1/3 sm:mb-0" key={article.id}>
          <figure>
            <div className="h-64 overflow-hidden rounded">
              <img alt="content" className="object-cover object-center w-full h-full" src={article.img + `?random=` + article.id} />
            </div>
            <figcaption className="p-3 text-white bg-yellow-500">{article.category}</figcaption>
          </figure>
          <h2 className="mt-5 text-xl font-medium title-font">{article.titre}</h2>
          <p className="mt-2 text-base leading-relaxed">{article.desc}</p>
          <p className="mt-2 text-base leading-relaxed"><i>{article.signature}, le {article.createdAt}</i> </p>
          <a href={"/" + article.id} className="inline-flex items-center mt-3 text-indigo-400">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
