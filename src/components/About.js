// MIT License
import React from 'react';
import { Header, Image, Container } from "semantic-ui-react";
import NoEvictions from "../assets/About_Protest.jpg";

function About() {
  return (
    <div >
      <Header as="h3"> About the BTC </Header>
      <Container textAlign='left'>
      The Boston Tenant Coalition (BTC) is a coalition of grassroots tenant neighborhood groups, 
      community development corporations, homeless and advocacy organizations that promotes 
      affordable housing in Boston. The BTC involves tenant leaders and housing activists from a 
      wide variety of constituencies and neighborhoods to defend and expand the rights of tenants, 
      and to push city, state and federal government, as well as private industry to address the 
      needs of low-income tenants. Our niche in the affordable housing movement is our stalwart 
      promotion of tenant rights, and our emphasis that affordable housing needs to be both 
      permanent and targeted to Boston’s low-income populations.
      </Container>
      <Image src={NoEvictions} alt="Woman holding no evictions sign" fluid />

    </div>
  )
}

export default About;