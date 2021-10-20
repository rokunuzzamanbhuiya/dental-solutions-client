import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [newUser, setNewUser] = useState(true);

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        newUser,
        setNewUser,
      }}
    >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <PrivateRoute path="/servicedetail/:detailId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
