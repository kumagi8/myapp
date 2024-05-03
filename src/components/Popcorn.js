import React, { useEffect, useRef, useState } from "react";
const URL = "https://www.omdbapi.com/?";
const APIKEY = "7fe3d23e";
const Popcorn = () => {
  const [searchText, setSeacrhText] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watched, setWatched] = useState([]);

  useEffect(
    function () {
      const controller = new AbortController();

      async function getMovies() {
        try {
          setIsLoading(true);
          const result = await fetch(`${URL}apikey=${APIKEY}&s=${searchText}`, {
            signal: controller.signal,
          });
          if (!result.ok) throw new Error("something went wrong!");
          const data = await result.json();
          setMovieData(data.Search);
          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      }
      getMovies();
      return function () {
        controller.abort();
      };
    },
    [searchText]
  );

  return (
    <div>
      <NavHeader
        movieData={movieData}
        searchText={searchText}
        setSeacrhText={setSeacrhText}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {isLoading ? (
          <Loader />
        ) : (
          <SearchResult
            setSelectedMovie={setSelectedMovie}
            movieData={movieData}
            searchText={searchText}
            setSeacrhText={setSeacrhText}
          />
        )}
        <div style={{ display: "flex", flexDirection: "row" }}>
          {selectedMovie && (
            <MovieDetail
              watched={watched}
              setWatched={setWatched}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
            />
          )}
        </div>
        <h2>watch list</h2>
        <WatchedMovies watched={watched} />
      </div>
    </div>
  );
};

function NavHeader({ movieData, searchText, setSeacrhText }) {
  const inputEl = useRef(null);
  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl.current) {
          return;
        }

        if (e.code === "Enter") {
          inputEl.current.focus();
          setSeacrhText("");
        }
      }
      document.addEventListener("keydown", callback);
      return () => document.removeEventListener("keydown", callback);
    },
    [setSeacrhText]
  );
  function handleSearch(e) {
    setSeacrhText(e.target.value);
  }
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "purple",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "4rem",
      }}
    >
      <h2 style={{ color: "white", marginLeft: "1rem" }}>PopCorn</h2>
      <input
        ref={inputEl}
        style={{
          outline: "none",
          margin: "1rem",
          width: "60%",
          height: "2rem",
          border: "none",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          borderRadius: ".4rem",
        }}
        type="text"
        placeholder="search a movie..."
        value={searchText}
        onChange={(e) => handleSearch(e)}
      />
      <p style={{ color: "white", marginRight: "1rem" }}>
        {movieData?.length > 0 ? `${movieData.length} results found` : ""}{" "}
      </p>
    </div>
  );
}

function SearchResult({ movieData, searchText, setSelectedMovie }) {
  return (
    <div style={{ height: "30rem", minWidth: "20rem", overflow: "auto" }}>
      {!searchText
        ? ""
        : !movieData
        ? `no data found with the keyword ${searchText}`
        : movieData.map((m) => (
            <Movie
              key={m.Title}
              movie={m}
              setSelectedMovie={setSelectedMovie}
            />
          ))}
    </div>
  );
}

function Movie({ movie, setSelectedMovie }) {
  const { Title: title, imdbID: id, Year: year, Poster: poster } = movie;
  function handleMovieSelect(id) {
    setSelectedMovie(id);
  }
  return (
    <div
      onClick={() => handleMovieSelect(id)}
      style={{
        display: "flex",
        margin: "1rem",
        backgroundColor: "pink",
        width: "15rem",
        alignItems: "center",
      }}
    >
      <img style={{ height: "5rem" }} src={poster} alt={title} />
      <p style={{ textAlign: "center", marginLeft: "1rem" }} key={id}>
        {title} {year}
      </p>
    </div>
  );
}

function Loader() {
  return (
    <div>
      <p>loading...</p>
    </div>
  );
}

function MovieDetail({ selectedMovie, setSelectedMovie, watched, setWatched }) {
  const [md, setMd] = useState({});
  const isWatched = watched.map((w) => w.imdbID).includes(md.imdbID);
  const [detailLoading, setDetailLoading] = useState(false);

  const {
    Title: title,
    Genre: genre,
    Released: release,
    Plot: plot,
    // Year:year,
    imdbRating: imdbR,
    Poster: poster,
    Runtime,
  } = md;

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          setSelectedMovie(null);
        }
      }
      document.addEventListener("keydown", callback);
      return () => document.removeEventListener("keydown", callback);
    },
    [setSelectedMovie]
  );
  useEffect(
    function () {
      async function fetchMovieDetails() {
        setDetailLoading(true);
        const movie = await fetch(`${URL}apikey=${APIKEY}&i=${selectedMovie}`);
        const details = await movie.json();
        setMd(details);
        setDetailLoading(false);
      }
      fetchMovieDetails();
    },
    [selectedMovie]
  );

  function handleClose() {
    setSelectedMovie(null);
  }
  function handleWatchList(md) {
    setWatched((watched) => [...watched, md]);
  }
  return (
    <>
      {detailLoading ? (
        <Loader />
      ) : (
        <>
          <button
            onClick={() => handleClose()}
            style={{
              height: "2rem",
              width: "2rem",
              borderRadius: "50%",
              border: "none",
            }}
          >
            👈
          </button>
          <div>
            <div style={{ display: "flex" }}>
              <img
                style={{ height: "10rem", marginRight: "5px" }}
                src={poster}
                alt={title}
              />
              <div>
                <p>Title: {title}</p>
                <p>Release: {release}</p>
                <p>Genre: {genre}</p>
                <p>Rating: {imdbR}</p>
              </div>
            </div>

            <p>Plot: {plot}</p>
            <p>Runtime: {Runtime}</p>
            {!isWatched ? (
              <button onClick={() => handleWatchList(md)}>
                Add to watch List
              </button>
            ) : (
              <p>added in watch list</p>
            )}
          </div>
        </>
      )}
    </>
  );
}
function WatchedMovies({ watched }) {
  console.log("watched: ", watched);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "",
      }}
    >
      {watched.length > 0 ? (
        <ul style={{}}>
          {watched.map((w) => (
            <li key={w}>{w.Title}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Popcorn;
