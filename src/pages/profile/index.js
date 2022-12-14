import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import ProfileInterface from '../../components/ProfileInterface/ProfileInterface';
import ProfileOptions from '../../components/ProfileOptions/ProfileOptions';
import './index.scss';

export default class Profile extends Component {
  render() {
    return (
      <Layout>
        <section className="estimate__main-box">
          <ProfileOptions />
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
