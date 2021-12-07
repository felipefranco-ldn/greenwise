import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import EstimateTable from '../../components/EstimateTable/EstimateTable';

export default class Flights extends Component {
  render() {
    return (
      <Layout>
        <EstimateTable />
      </Layout>
    );
  }
}
