import React from "react";
import AppRoute from "./AppRoute";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";

import ErrorBoundary from "./ErrorBoundary/ErrorBoundaries";
export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <AppRoute />
      </Router>
    </ErrorBoundary>
  );
}
