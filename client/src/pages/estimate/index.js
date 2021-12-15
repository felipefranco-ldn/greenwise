import React, { Component } from 'react';
import EstimateInterface from '../../components/EstimateInterface/EstimateInterface';
import EstimateOptions from '../../components/EstimateOptions/EstimateOptions';
import Layout from '../../components/Layout/Layout';
import './index.scss';

export default class Estimate extends Component {
  render() {
    return (
      <Layout>
        <section className="estimate__main-box">
          <EstimateOptions />
          <section className="estimate__content-box">
            <div className="estimate__content">
              <EstimateInterface />
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}
