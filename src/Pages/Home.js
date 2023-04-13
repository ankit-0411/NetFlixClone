import React from "react";
import Main from "../components/Main";
import Raw from "../components/Raw";
import requests from "../Request";

function Home() {
  return (
    <>
      <Main />
      <Raw title="Upcoming" fetchURl={requests.requestToprated} />
      <Raw title="Popular" fetchURl={requests.requestPopular} />
      <Raw title="Toprated" fetchURl={requests.requestToprated} />
      <Raw title="Tranding" fetchURl={requests.requestTrending} />
    </>
  );
}

export default Home;
