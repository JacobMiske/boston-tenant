// MIT License
import React from 'react';
import { Header, Container } from "semantic-ui-react";

function Welcome() {
  return (
    <div>
      <Header as="h3">Welcome </Header>
      <Container textAlign='left'>
      The Boston Tenants Coalition (BTC) is a coalition of grassroots tenant neighborhood groups, 
      community development corporations, and homeless and advocacy organizations that promotes 
      affordable housing in Boston, organized to defend and expand the rights of tenants, and to 
      push city, state and federal government, as well as private industry to address the needs of 
      low-income tenants. We operate from a core belief that more affordable housing needs to be 
      both permanent and targeted to Boston’s low-income populations.
      </Container>
    </div>
  )
}

export default Welcome;