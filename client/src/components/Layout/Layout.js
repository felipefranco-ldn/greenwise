import React from 'react';
import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';
import './Layout.scss';

export default function Layout({ children }) {
  return (
    <>
      <PageHeader />
      <section className="layout">
        <div className="layout__box">{children}</div>
      </section>
      <PageFooter />
    </>
  );
}
