import { useEffect, useState } from "react";
import { Article } from "./interfaces/Article";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Categorie } from "./interfaces/Categorie";
import { NavLink } from "react-router-dom";

function Home() {
  // FILTRE PAR CATEGORIE
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [catSelected, setCatSelected] = useState("All");
  const [data, setData] = useState<Article[]>([]);
  const [filteredData, setFilteredData] = useState<Article[]>([]);

  console.log(catSelected);
  
  const getCategories = async () => {
    try {
      const response = await fetch("/db.json");
      const result = await response.json();
      setCategories(result.categories);
      console.log(result);
    } catch (error) {
      alert("Échec du fetch");
    }
  };

  const getArticles = async () => {
    try {
      const response = await fetch("/db.json");
      const result = await response.json();
      setData(result.articles);
      setFilteredData(result.articles);
    } catch (error) {
      alert("Échec du fetch");
    }
  };

  useEffect(() => {
    getCategories();
    getArticles();
  }, []);

  useEffect(() => {
    if (catSelected === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(article => article.category === catSelected));
    }
  }, [catSelected, data]);

  const handleClick = (name: string) => {
    setCatSelected(name);
  }

  if (data.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Navbar />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 overflow-hidden bg-gray-800 rounded">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
              <h1 className="mb-2 text-2xl font-medium text-white sm:w-2/5 title-font sm:mb-0">Geek Genuis</h1>
              <div className="flex items-center justify-center font-mono leading-relaxed select-none">
                <div className="grid grid-cols-4 gap-4">
                  <h1 onClick={()=> handleClick("All")} className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-gray-500 text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
                      ALL
                  </h1>
                  {categories.map((category) => (
                    <h1 
                      onClick={() => handleClick(category.name)} 
                      key={category.id} 
                      className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-gray-500 text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
                    >
                      {category.name}
                    </h1>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
            {filteredData.map((article) => (
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
      <Footer />
    </>
  );
}

export default Home;
