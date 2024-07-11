import { useEffect, useState } from "react";
import { Article } from "./interfaces/Article";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const Detail = () => {
    const [data, setData] = useState<Article[]>([]);
    const [article, setArticle] = useState<Article | null>(null); // Modifié pour stocker un seul article ou null
    const { id } = useParams<{ id: string }>();

    // Récupérer les données
    const getAllArticles = async () => {
        try {
            const response = await fetch(`/db.json`);
            const result = await response.json();
            if (result.articles.length > 0) {
                setData(result.articles);
            } else {
                alert('Article not found');
            }
        } catch (error) {
            alert('Echec du fetch');
        }
    };

    useEffect(() => {
        getAllArticles();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const foundArticle = data.find(article => article.id === Number(id));
            setArticle(foundArticle || null);
        }
    }, [data, id]);

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <>
        <Navbar />
            <section className="relative pt-12 body-font">
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
                        <img alt={article.titre} className="max-w-full rounded-lg shadow-lg" src={article.img} />
                    </div>
                    <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
                        <div className="md:pr-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 p-3 mt-8 mb-6 text-center text-pink-600 bg-pink-300 rounded-full shadow-lg">
                                <i className="text-xl fas fa-rocket"></i>
                            </div>
                            <h3 className="text-3xl font-semibold">{article.titre}</h3>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                {article.contenu}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero animi facilis, placeat nisi minus consequatur illum odio sed incidunt voluptatum totam harum quae sint modi commodi nesciunt optio repudiandae?
                            </p>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto adipisci soluta odio magnam neque corrupti, quibusdam aperiam illum ad voluptates molestiae delectus necessitatibus, molestias omnis magni sed? Dolorem, magni.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero animi facilis, placeat nisi minus consequatur illum odio sed incidunt voluptatum totam harum quae sint modi commodi nesciunt optio repudiandae?
                            </p>
                            <ul className="mt-6 list-none">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full"><i className="fas fa-fingerprint"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                {article.signature}, le {article.createdAt}
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full"><i className="fab fa-html5"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">{article.category}</h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <NavLink to={"/"} className="inline-flex items-center mt-3 text-indigo-400">Revenir à l'accueil
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Detail;
