import React, { Component, useState } from "react";
import Sponsorlist from "./components/Sponsorlist";
import CharityPage from "./components/CharityPage";
import SponsorPage from "./components/SponsorPage";
import Carousel from "./components/Carousel";
import Featurette from "./components/Featurette";
import { JumbotronContainer } from "./containers/jumbotron";
import { FaqsContainer } from "./containers/faqs";
import { FooterContainer } from "./containers/footer";

function Main({ SponsorData }) {
  return (
    <>
      <JumbotronContainer />
      <Featurette />
      <Carousel />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Main;
