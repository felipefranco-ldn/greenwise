import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import HelpInterface from '../../components/HelpInterface/HelpInterface';
import ProfileOptions from '../../components/ProfileOptions/ProfileOptions';

export default class Help extends Component {
  render() {
    return (
      <Layout>
        <section className="estimate__main-box">
          <ProfileOptions />
          <section className="estimate__content-box">
            <div className="estimate__content">
              <HelpInterface />
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}
