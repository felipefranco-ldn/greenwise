import React, { Component } from 'react';
import EstimateTable from '../../components/EstimateTable/EstimateTable';
import Layout from '../../components/Layout/Layout';

export default class Estimate extends Component {
  render() {
    return (
      <Layout>
        <EstimateTable />
      </Layout>
    );
  }
}
