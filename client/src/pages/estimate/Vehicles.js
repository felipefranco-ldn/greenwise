import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import EstimateOptions from '../../components/EstimateOptions/EstimateOptions';
import VehiclesInterface from '../../components/VehiclesInterface/VehiclesInterface';
export default class Vehicles extends Component {
  render() {
    return (
      <Layout>
        <section className="estimate__main-box">
          <EstimateOptions />
          <section className="estimate__content-box">
            <div className="estimate__content">
              <VehiclesInterface />
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}
