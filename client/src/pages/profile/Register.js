import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import RegisterInterface from '../../components/RegisterInterface/RegisterInterface';
import ProfileOptions from '../../components/ProfileOptions/ProfileOptions';

export default class Register extends Component {
  render() {
    return (
      <Layout>
        <section className="estimate__main-box">
          <ProfileOptions />
          <section className="estimate__content-box">
            <div className="estimate__content">
              <RegisterInterface />
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}
