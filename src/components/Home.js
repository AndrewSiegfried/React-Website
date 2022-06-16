import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import { Card,Col, Container,Row } from 'react-bootstrap';
import Me from '../pictures/me';
import Firstpage from './firstpage';
export default function Home() {
  return (
    <div className="con">
       
       
      <Container>
        <br/>
      <img height={200} width={1299} src={require("../pictures/top.jpg")} />
  <Row>
    <Col sm md={2}>

    <Me imgSrc={require("../pictures/me.png")} />
    </Col>

    <Col  sm>
    <Firstpage/>
    </Col>
    
  </Row>
  
  </Container>

  
  
    </div>
  )
}
