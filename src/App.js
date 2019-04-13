import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Card from "./components/Card";
import Footer from ".components/Footer";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          <Card />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
    export default App;
