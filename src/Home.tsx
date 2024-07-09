import { useEffect, useState } from "react";
import { Article } from "./interfaces/Article";
import Card from "./Card";

function Home() {
  // Récupérer tous les articles de db.json
  // les afficher sur la page Home dans une boucle .map()
  // Créer un bouton pour chaque article de façon individuelle pour aller sur la page de détail
  // Props ?
  // Page détail avec un bouton de retour sur Home Page
  // Navbar simple 
  
  const [data, setData] = useState<Article[]>([]);
  
  useEffect(() => {
      const getArticles = async() => {
          try {
              // const response = await fetch("/db.json")
              const response = await fetch("/db.json")
              const result = await response.json()
              // je mets à jour mon state locale 
              setData(result)
              console.log(result);
          }catch(error) {
              // handle error
              alert('Echec du fetch ')
          }
      }
        // je fetch ma data
        getArticles()
    }, []);
    // useEffect(() => {
    //   console.log(data);
    //   // Log data whenever it changes
    // }, [data]);
  // if(data.length === 0){
  //   return <div>Loadingg...</div>
  // }
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
          {data.length>0 ? <Card articles={data} /> : "Loadingg..." }
          
          
         
        </div>
      </div>
      </section>
    </>
  )
}

export default Home
