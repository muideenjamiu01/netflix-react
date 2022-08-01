import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      {/* <Row title="Top Rated" fetchUrl={request.fetchTopRated} /> */}
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
