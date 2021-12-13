import React, { Component } from 'react';
import EstimateOptions from '../../components/EstimateOptions/EstimateOptions';
import Layout from '../../components/Layout/Layout';
import ProfileInterface from '../../components/ProfileInterface/ProfileInterface';
import './index.scss';

export default class Profile extends Component {
  render() {
    return (
      <Layout>
        <section className="estimate__main-box">
          <EstimateOptions />
          <section className="estimate__content-box">
            <div className="estimate__content">
              <ProfileInterface />
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}
