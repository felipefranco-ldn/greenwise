import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import ReduceInterface from '../../components/ReduceInterface/ReduceInterface';
import './index.scss';

export default class Reduce extends Component {
  render() {
    return (
      <Layout>
        <section className="compensate__main-box">
          <section className="compensate__content-box">
            <div className="compensate__content">
              <ReduceInterface />
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}
