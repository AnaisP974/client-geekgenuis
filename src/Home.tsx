import { useEffect, useState } from "react";
import { Article } from "./interfaces/Article";

function Home() {
  // Récupérer tous les articles de db.json
  // les afficher sur la page Home dans une boucle .map()
  // Créer un bouton pour chaque article de façon individuelle pour aller sur la page de détail
  // Props ?
  // Page détail avec un bouton de retour sur Home Page
  // Navbar simple 
  
  const [data, setData] = useState<Article[]>([]);
  
  const getArticles = async() => {
      try {
          // const response = await fetch("https://client-geekgenuis.vercel.app/db.json")
          const response = await fetch("https://api-geekgenuis.vercel.app/")
          const result = await response.json()
          // je mets à jour mon state locale 
          setData(result)
          console.log(result);
      }catch(error) {
          // handle error
          alert('Echec du fetch ')
      }
  }
    useEffect(() => {
        // je fetch ma data
        getArticles()
    }, []);
    useEffect(() => {
      console.log(data);
      // Log data whenever it changes
    }, [data]);
  
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <h1>GeekGenuis</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 overflow-hidden bg-gray-800 rounded">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
            <h1 className="mb-2 text-2xl font-medium text-white sm:w-2/5 title-font sm:mb-0">Space The Final Frontier</h1>
            <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          {data.map((article) => (
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
         
        </div>
      </div>
      </section>
    </>
  )
}

export default Home
