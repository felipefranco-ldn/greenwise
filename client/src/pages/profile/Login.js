import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import LoginInterface from '../../components/LoginInterface/LoginInterface';
import ProfileOptions from '../../components/ProfileOptions/ProfileOptions';

export default class Login extends Component {
  render() {
    return (
      <Layout>
        <section className="estimate__main-box">
          <ProfileOptions />
          <section className="estimate__content-box">
            <div className="estimate__content">
              <LoginInterface />
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}
