import React from "react";
import Navbar from "../initial_components/Navbar";
import Footer from "../initial_components/Footer";
import Heroimg from "../initial_components/proHeroimg";
import Workcard from "../initial_components/Workcard";
import VideoPlayer from "../initial_components/VideoPlayer";

function Project() {
  return (
    <>
      <Navbar />
      <Heroimg heading="Projects" text="Some of my most recent work" />
      <Workcard />
      <Footer />
      <VideoPlayer />
    </>
  );
}

export default Project;
