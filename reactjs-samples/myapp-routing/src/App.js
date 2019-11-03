import React from "react";
import AppRoute from './AppRoute';

import { BrowserRouter as Router } from "react-router-dom";

import Header from './Header';  

export default function App() {
  return (
    <Router>
     <Header/>
     <AppRoute/>
    </Router>
  );
}
