import React from "react";
import Navbar from "../initial_components/Navbar";
import Footer from "../initial_components/Footer";
import Heroimg from "../initial_components/proHeroimg";
import Form from "../initial_components/Form";
import VideoPlayer from "../initial_components/VideoPlayer";

function Contact() {
  return (
    <>
      <Navbar />
      <Heroimg heading="Contact" text="Lets have a chat" />
      <Form />
      <Footer />
      <VideoPlayer />
    </>
  );
}

export default Contact;
