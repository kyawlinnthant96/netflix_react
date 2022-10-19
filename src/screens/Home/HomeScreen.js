import React from "react";

// comp
import Banner from "../../components/Banner/Banner";
import Nav from "../../components/Nav/Nav";
import Row from "../../components/Row/Row";
// utilities
import requests from "../../utilities/Request";
import axios from "../../utilities/axios";

// style
import "./HomeScreen.css";
import Footer from "../../components/Footer/Footer";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Top Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default HomeScreen;
