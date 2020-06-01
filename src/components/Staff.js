// MIT License
import React from 'react';
import { Header, Image, Container } from "semantic-ui-react";
import KB from "../assets/kathy-2.jpg";
import JM from "../assets/JacobMiske_headshot.jpg";


function Staff() {
    return (
        <div >
            <Header as="h3"> Staff </Header>
            <Header as="h5"> Kathy Brown </Header>
            <Container textAlign='left'>
            Coordinator (kathy@bostontenant.org)
            </Container>
            <Image src={KB} alt="Photo of Kathy Brown" />

            <Header as="h5"> Jacob Miske </Header>
            <Container textAlign='left'>
            Website assistance
            </Container>
            <Image src={JM} alt="Photo of Jacob Miske" small style={{"width": 300}}/>
        </div>
    )
}

export default Staff;