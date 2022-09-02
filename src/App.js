import { useEffect, useState } from "react";
import AnimeList from "./components/AnimeList";
import AnimeInfo from "./components/AnimeInfo";
import AddToList from "./components/AddToList";
import RemoveFromList from "./components/RemoveFromList";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState([]);
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setMyAnimeList] = useState([]);

  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  const addTo = (anime) => {
    setMyAnimeList([...myAnimeList, anime]);
  };

  const removeFrom = (anime) => {
    let newList = [];
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <div className="header">
        <h1>Otaku Anime DB</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search your anime..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="container">
        <div className="anime-info">
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>

        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList
              animeList={animeData}
              setAnimeInfo={setAnimeInfo}
              animeComponent={AddToList}
              handleList={addTo}
            />
          </div>

          <h2 className="text-heading">My List</h2>
          <div className="row">
            <AnimeList
              animeList={myAnimeList}
              setAnimeInfo={setAnimeInfo}
              animeComponent={RemoveFromList}
              handleList={removeFrom}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
