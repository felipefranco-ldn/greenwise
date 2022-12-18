import React from "react";
import PageFooter from "../PageFooter/PageFooter";
import PageHeader from "../PageHeader/PageHeader";
import "./Layout.scss";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <PageHeader />
      <main className="main">{children}</main>
      <PageFooter />
    </>
  );
}
