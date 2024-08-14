import React from "react";
import Navbar from "../initial_components/Navbar";
import Heroimg from "../initial_components/Heroimg";
import Footer from "../initial_components/Footer";
import HomeTextDisplay from "../initial_components/HomeTextDisplay";
import VideoPlayer from "../initial_components/VideoPlayer";
// import Workcard from '../initial_components/Workcard'

function Home() {
  return (
    <>
      <Navbar />
      <Heroimg />
      <HomeTextDisplay />
      <Footer />
      <VideoPlayer />
    </>
  );
}

export default Home;
