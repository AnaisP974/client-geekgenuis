import { useEffect, useState } from "react";
import { Article } from "./interfaces/Article";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Categorie } from "./interfaces/Categorie";
import CategoryButtons from "./components/CategoryButtons";
import ArticleList from "./components/ArticleList";
import "./App.css";

function Home() {
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [catSelected, setCatSelected] = useState("All");

  const [data, setData] = useState<Article[]>([]);
  const [filteredData, setFilteredData] = useState<Article[]>([]);

  /**
   * Récupère toutes les catégories de 'db.json' et les stock dans 'categories'
   */
  const getCategories = async () => {
    try {
      const response = await fetch("/db.json");
      const result = await response.json();
      setCategories(result.categories);
    } catch (error) {
      alert("Échec du fetch");
    }
  };

  /**
   * Récupère tous les articles de 'db.json' et les stocke dans 'data'
   */
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
    
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 overflow-hiddenrounded">
              <div className="w-24 h-full"></div>
            </div>
            <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
              <h1 className="mb-2 text-2xl font-medium sm:w-2/5 title-font sm:mb-0">Geek Genuis</h1>
              <CategoryButtons categories={categories} handleClick={handleClick} catSelected={catSelected} />
            </div>
          </div>
          <div className="max-w-4xl m-auto">
          <ArticleList currentItems={filteredData} />
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
}

export default Home;

