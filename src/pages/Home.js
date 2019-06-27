import React from "react";
import Page from "components/layout/Page";
import PeriodicTable from "../components/PeriodicTable";
// import {elementIndexes} from "api/periodic";
// import Grid from "components/layout/Grid";
// import Element from "components/PeriodicTable/Element";

export default function Home() {
  return (
    <Page>
      <PeriodicTable />
    </Page>
  )
}

// console.log(elementIndexes);

export const homeRoute = {
  Component: Home,
  path: "/",
  name: "Home",
  defaultRoute: true
}