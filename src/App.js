import React from 'react';
import banner from './banner.gif';
import './App.css';
import Welcome from "./components/Welcome";
import Example from "./components/Example";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Grid, Card } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <div className="Header"/>
        <a href="/">
          <img src={banner} alt="banner"/>
        </a>
        <Switch>
          <Route path="/" exact component={Example}/>
          <Route path="/contact" component={Welcome}/>
        </Switch>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Sidebar/>
            </Grid.Column>
            <Grid.Column>
              <Welcome/>
            </Grid.Column>
            <Grid.Column>
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
