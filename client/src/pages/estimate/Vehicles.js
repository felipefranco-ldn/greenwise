import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import EstimateOptions from '../../components/EstimateOptions/EstimateOptions';

export default class Vehicles extends Component {
  render() {
    return (
      <Layout>
        <section className="estimate__main-box">
          <EstimateOptions />
          <section className="estimate__content-box">
            <div className="estimate__content"></div>
          </section>
        </section>
      </Layout>
    );
  }
}
