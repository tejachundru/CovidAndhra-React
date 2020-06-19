import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavBar from './Components/Navbar';

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
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
