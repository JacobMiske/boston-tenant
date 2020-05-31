// MIT License
import React from 'react';
import banner from '../assets/banner.gif';
import '../index.css';
import Sidebar from "./components/Sidebar";
import { Menu, Grid, Card } from 'semantic-ui-react'

class Home extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="Header"/>
        <a href="/">
          <img src={banner} alt="banner"/>
        </a>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Menu compact>
                <Sidebar/>
              </Menu>
            </Grid.Column>
            <Grid.Column>
              <p>
                Hello
              </p>
            </Grid.Column>
            <Grid.Column>
              <Card
                  link
                  header='Immigrant Tenant Support Initiative'
                  meta='ITSI'
                  description={"To learn more: "}
              />
              <Card
                link
                header='Upcoming Events'
                meta=''
                description={"- 6/1 10PM COVID-19 Rent Information Video Call"}
              />
              <Card
                link
                header='Please Donate to Fight for Affordable Housing!'
                meta='(PayPal)'
                description={"Click here to donate"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="Footer">
          Copyright 2020 Boston Tenant Coalition
        </div>
      </div>
    );
  }
}

export default Home;