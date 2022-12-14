import React from "react";
import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <>
      <PageHeader />
      <main className="main">{children}</main>
      <PageFooter />
    </>
  );
}
