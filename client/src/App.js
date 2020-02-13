import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { AuthProvider } from "./context/auth";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Header />
          <Router exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
