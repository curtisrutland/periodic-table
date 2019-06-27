import React from "react";
import { Router } from "@reach/router";
import { homeRoute } from "./Home";

export const ROUTES = [
  homeRoute
]

function mapRoutes(route) {
  const { Component, path, defaultRoute = false } = route;
  return (
    <Component path={path} key={path} default={defaultRoute} />
  )
}

export default function Pages() {
  return (
    <Router style={{ height: "100%", width: "100%" }}>
      {ROUTES.map(mapRoutes)}
    </Router>
  )
}