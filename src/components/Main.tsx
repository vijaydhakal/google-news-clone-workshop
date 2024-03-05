import { useEffect, useState } from "react";
import Home from "./Home";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import moment from "moment";
import News from "./News";

const Main = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");

  const getNewsArticle = async () => {
    try {
      const apiKey: any = import.meta.env.VITE_NEWS_API_KEY;
      await fetch(
        `https://newsapi.org/v2/everything?q=${
          menu ? menu : "all"
        }&sortBy=popularity&apiKey=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => setNews(data.articles));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNewsArticle();
  }, [menu]);

  const date: any = new Date();

  return (
    <>
      <div className="bg-gray-100">
        {/* <img src={news[0]?.urlToImage}/> */}
        <Navbar setSearch={setSearch} />
        <Menubar setMenu={setMenu} />
        <div className="bg-gray-100 pt-5 w-screen">
          <h1 className="ml-28 txt-3xl">Your Briefing</h1>
          <h1 className="ml-28 text-gray-500 text-sm mt-2">
            {moment(date).format("DD-MM-YYYY")}
          </h1>
          <Home news={news} />
        </div>
        <News news={news} search={search} />
      </div>
    </>
  );
};

export default Main;
