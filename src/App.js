import React from 'react';
import banner from './assets/banner.gif';
import './App.css';
import Welcome from "./components/Welcome";
import About from "./components/About";
import History from "./components/History";
import Staff from "./components/Staff";
import MemberOrgs from "./components/MemberOrgs";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Grid, Card, Divider } from 'semantic-ui-react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <div className="Header"/>

        <a href="/">
          <img src={banner} alt="banner"/>
        </a>

        <Divider/>

        <Grid divided='centered vertically'>
          <Grid.Row columns={3}>
            <Grid.Column width={3}>
              <Sidebar/>
            </Grid.Column>
            <Grid.Column width={7}>
              <Router>
                <Switch>
                  <Route path="/" exact component={Welcome}/>
                  <Route path="/about" component={About}/>
                  <Route path="/history" component={History}/>
                  <Route path="/staff" component={Staff}/>
                  <Route path="/memberorgs" component={MemberOrgs}/>
                  <Route path="/contact-us" component={Contact}/>
                </Switch>
              </Router>
            </Grid.Column>
            <Grid.Column width={3}>
              <Card
                  link
                  header='Immigrant Tenant Support Initiative'
                  meta='ITSI'
                  description={"To learn more: click here"}
              />
              <Card
                link
                header='Upcoming Events (Not actually)'
                meta=''
                description={"- 6/1 10PM COVID-19 Rent Information Video Call"}
              />
              <Card
                link
                header='Please Donate to Fight for Affordable Housing!'
                meta='(PayPal)'
                description={"Click here to donate and support us"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer/>
      </div>
    );
  }
}

export default App;
