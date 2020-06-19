import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavBar from './Components/Navbar';
import Home from './Components/Home';

const schema = {
  '@context': 'http://schema.org/',
  name: 'Coronavirus Outbreak in Andhra',
  alternateName: 'COVID-19 Andhra Tracker',
  url: 'https://www.covidandhra.com/',
};

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Router>
        <div>
          <NavBar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/users">
              <Users />
            </Route> */}
            <Route path="/">
              <HomeRoute />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function HomeRoute() {
  return <Home></Home>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
