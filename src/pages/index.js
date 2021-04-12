import React, { useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ethworks</title>
        <link rel="canonical" href="http://ethworks-test.netlify.app" />
      </Helmet>
      <Hero></Hero>
      <Team></Team>
      <Contact></Contact>
    </Layout>
  );
};
