import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import HeroImage from '../../components/HeroImage/HeroImage';
import './index.scss';

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <HeroImage />
      </Layout>
    );
  }
}
