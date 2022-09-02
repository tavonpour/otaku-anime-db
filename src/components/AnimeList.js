import React from "react";

const AnimeList = ({ animeList, setAnimeInfo, animeComponent, handleList }) => {
  const AddToList = animeComponent;

  return (
    <>
      {animeList ? (
        animeList.map((anime, index) => (
          <div
            className="card"
            key={index}
            onClick={(e) => setAnimeInfo(anime)}
          >
            <img src={anime.images.jpg.image_url} alt="" />
            <div className="anime-info">
              <h4>{anime.title}</h4>
              <div className="overlay">
                <h4>{anime.title_japanese}</h4>
                <div className="synopsis">
                  <p>{anime.synopsis}</p>
                </div>
                <AddToList anime={anime} addAnime={handleList} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No anime</p>
      )}
    </>
  );
};

export default AnimeList;
