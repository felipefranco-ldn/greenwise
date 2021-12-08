import React, { Component } from 'react';
import ElectricityInterface from '../../components/ElectricityInterface/ElectricityInterface';
import EstimateTable from '../../components/EstimateTable/EstimateTable';
import Layout from '../../components/Layout/Layout';

export default class Electricity extends Component {
  render() {
    return (
      <Layout>
        <EstimateTable>
          <ElectricityInterface />
        </EstimateTable>
      </Layout>
    );
  }
}
