import { useEffect, useState } from "react";
import { Article } from "./interfaces/Article";
import { NavLink, useParams } from "react-router-dom";

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
            <section className="relative pt-12 bg-gray-900 text-gray-400 body-font">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img alt={article.titre} className="max-w-full rounded-lg shadow-lg" src={article.img} />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                                <i className="fas fa-rocket text-xl"></i>
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
                            <ul className="list-none mt-6">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fas fa-fingerprint"></i></span>
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
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fab fa-html5"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">{article.category}</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="far fa-paper-plane"></i></span>
                                        </div>
                                        <div>
                                            <NavLink to={"/"}>
                                                <h4 className="text-blueGray-500">Revenir à l'accueil</h4>
                                            </NavLink>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <footer className="relative  pt-8 pb-6 mt-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 font-semibold py-1">
                                    Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    );
};

export default Detail;
