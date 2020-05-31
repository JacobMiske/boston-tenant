// MIT License
import React from 'react';
import { Header, Container, Image } from "semantic-ui-react";
import MichaelStone from '../assets/michaelStone.jpg';
import Hearing from '../assets/hearing.jpg';
import MLK from "../assets/MLK-EHO.jpg";
import DisplacementMap from "../assets/BD-map-768x299.jpg";

function Welcome() {
  return (
    <div>
      <Header as="h2">Welcome </Header>
      <Container textAlign='left'>
      The Boston Tenants Coalition (BTC) is a coalition of grassroots tenant neighborhood groups, 
      community development corporations, and homeless and advocacy organizations that promotes 
      affordable housing in Boston, organized to defend and expand the rights of tenants, and to 
      push city, state and federal government, as well as private industry to address the needs of 
      low-income tenants. We operate from a core belief that more affordable housing needs to be 
      both permanent and targeted to Boston’s low-income populations.
      </Container>
      <Header as="h3"> Michael Stone Scholars Fund</Header>
      <Image src={MichaelStone} alt="Michael Stone holding poster" fluid />
      <Container textAlign='left'>
      Over the past several months, the Stone Scholars Advisory committee, working together with 
      the Boston Tenant Coalition, sketched a research agenda for the Fund that will ensure 
      continuity of the critical annual research Michael had long done on a pro bono basis for 
      our tenant advocacy.
      </Container>
      <Container>
      Read more <a href="http://www.bostontenant.org/reports-and-analysis/michael-stone-scholars/"> here</a>
      </Container>

      <Header as="h3"> 2019 Inclusionary Development Policy Campaign </Header>
      <Image src={Hearing} alt="hearing on June 10, 2019" fluid />
      <Container textAlign='left'>
      Housing is a right, and we need to use all of the tools available to us to ensure that those 
      who need truly affordable housing the most can access it. That is why we have partnered with 
      organizations across the city to demand that the City, Mayor and BPDA improve the IDP to 
      include families that are being left out with this new announcement to update the policy.
      </Container>
      <Container>
      Read more  <a href="http://www.bostontenant.org/campaigns/2019-idp-campaign/"> here</a>
      </Container>

      <Header as="h3"> Affirmatively Furthering Fair Housing Campaign </Header>
      <Image src={MLK} alt="equal housing speech by MLK" fluid />
      <Container textAlign='left'>
      Despite the Trump administration suspending the Affirmatively Furthering Fair Housing Rule that the 
      Obama administration created to replace the Analysis of Impediments for municipalities, the City of 
      Boston has agreed to continue to work on their Assessment of Fair Housing with us. 
      </Container>
      <Container>
      Read more  <a href="http://www.bostontenant.org/campaigns/affirmatively-furthering-fair-housing-affh/"> here</a>
      </Container>

      <Header as="h3"> Boston Displacement Mapping </Header>
      <Image src={DisplacementMap} alt="equal housing speech by MLK" fluid />
      <Container textAlign='left'>
      A new Boston displacement map explores more about the Boston housing crisis and follows people’s 
      stories about their displacement experiences.
      </Container>
      <Container>
      Read more  <a href="http://www.bostondisplacement.org/"> here</a>
      </Container>

    </div>
  )
}

export default Welcome;