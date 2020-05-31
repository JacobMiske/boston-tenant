// MIT License
import React from 'react';
import { Header, Container, Divider } from "semantic-ui-react";

function Contact() {
  return (
    <div>
      <Header as='h3'>Contact Us</Header>
      <Container textAlign='left' text>
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
    </div>
  )
}

export default Contact;