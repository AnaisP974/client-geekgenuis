interface ArticleProps {
    id: number;
    titre: string;
    desc: string;
    contenu: string;
    createdAt: string;
    updatedAt: string;
    signature: string;
    category: string;
    img: string;
}
interface Articles {
    articles: ArticleProps[]
}

export default function Card({articles}: Articles) {
    return (
        <>
        {articles.map((article) => (
            <article className="p-4 mb-6 md:w-1/3 sm:mb-0" key={article.id}>
              <figure>
                <div className="h-64 overflow-hidden rounded">
                  <img alt="content" className="object-cover object-center w-full h-full" src={article.img + `?random=` + article.id} />
                </div>
                <figcaption className="p-3 text-white bg-yellow-500">{article.category}</figcaption>
              </figure>
              <h2 className="mt-5 text-xl font-medium text-white title-font">{article.titre}</h2>
              <p className="mt-2 text-base leading-relaxed">{article.desc}</p>
              <p className="mt-2 text-base leading-relaxed"><i>{article.signature}, le {article.createdAt}</i> </p>
              <a href={"/" + article.id} className="inline-flex items-center mt-3 text-indigo-400">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </article>
        ))}
        </>
    )
}