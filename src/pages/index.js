import React, { useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Contact from "../components/Contact";

export default () => {
  return (
    <Layout>
      <Hero></Hero>
      <Team></Team>
      <Contact></Contact>
    </Layout>
  );
};
