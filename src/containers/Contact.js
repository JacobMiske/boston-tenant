// MIT License
import React from 'react';
import banner from '../banner.gif';
import './index.css';
import Sidebar from "../components/Sidebar";
import { Header, Container, Divider, Menu, Grid, Card } from 'semantic-ui-react'

class Contact extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="Header"/>
        <a href="/">
          <img src={banner} alt="banner"/>
        </a>
        <Divider/>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Menu compact>
                <Sidebar/>
              </Menu>
            </Grid.Column>
            <Grid.Column>
              <Container textAlign='left' text>
                <Header as='h2'>Contact Us</Header>
                <p>
                  Boston Tenants Coalition
                </p>
                <p>
                  11 Beacon Street, Suite 510
                </p>
                <p>
                  Boston, MA 02108
                </p>
                <Divider/>
                <p> Call at: </p>
                <p>
                  617-423-8609
                </p>
                <Divider/>
                <p> Email at: </p>
                <p>
                  <a href="mailto:kathy@bostontenant.org">kathy@bostontenant.org</a>
                </p>
              </Container>
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

export default Contact;