import React from 'react'
import Navbars from './navbar';
import { Card,Col, Container,Row } from 'react-bootstrap';
export default function About() {
  return (
    <div>
      <br/>
      <Container>
        
        <Card body >
          <Card.Title className="d-flex justify-content-center"> About me </Card.Title>
          {/* Card Body text below */}
          My name is Andrew Siegfried, after many successful years in sales I've shifted gears to persue my passion for Website Development. I've been lucky enough to have had 
          various mentors throughout my career. Surrounding myself with experts in their respective crafts has allowed me to learn, grow and catapult myself into my passion. 
          I found early on I had a natural talent for being able to connect with people and that translated to a very successful career in the Sales Industry. After growing up in 
          California, I decided to leave the coast 
        </Card>;
      </Container>
      
    </div>
  )
}
