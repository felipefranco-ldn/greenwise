import React, { Component } from 'react';
import ElectricityInterface from '../../components/ElectricityInterface/ElectricityInterface';
import EstimateOptions from '../../components/EstimateOptions/EstimateOptions';
import Layout from '../../components/Layout/Layout';
import './Electricity.scss';

export default class Electricity extends Component {
  render() {
    return (
      <Layout>
        <section className="estimate__main-box">
          <EstimateOptions />
          <section className="estimate__content-box">
            <div className="estimate__content">
              <ElectricityInterface />
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}
