import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import "./index.scss";
import HeroImage from "../../components/HeroImage/HeroImage";

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <HeroImage />
      </Layout>
    );
  }
}
