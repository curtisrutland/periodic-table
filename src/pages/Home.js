import React from "react";
import Page from "components/layout/Page";
import PeriodicTable from "components/PeriodicTable";

export default function Home() {
  return (
    <Page>
      <PeriodicTable />
    </Page>
  )
}

export const homeRoute = {
  Component: Home,
  path: "/",
  name: "Home",
  defaultRoute: true
}