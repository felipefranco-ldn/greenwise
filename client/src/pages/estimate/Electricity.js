import React, { Component } from 'react';
import ElectricityChart from '../../components/ElectricityChart/ElectricityChart';
import EstimateTable from '../../components/EstimateTable/EstimateTable';
import Layout from '../../components/Layout/Layout';

export default class Electricity extends Component {
  render() {
    return (
      <Layout>
        <EstimateTable>
          <ElectricityChart />
        </EstimateTable>
      </Layout>
    );
  }
}
