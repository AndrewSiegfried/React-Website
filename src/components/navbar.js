import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './about';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import {Routes,Route,Link} from "react-router-dom"; 
import AskChip from './AskChip';
import StarWars from './StarWars';
import Pokemon from './Pokemon/pokemon';
import Home from './Home';
import Restaurants from './Restaurants/Restaurants';


 function Navbars() {
  return (
    <>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to={'/'}>Andrew Siegfried</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={'/'}>Home</Nav.Link> 
        <Nav.Link as={Link} to={'/About'}>About</Nav.Link>
        <NavDropdown title="Projects" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to={'/Pokemon'}>Pokemon</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={'/Restaurants'}>Restaurants</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={'/AskChip'} >Ask Chip</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={'/StarWars'}>Star Wars</NavDropdown.Item>
          

        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
<main>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path = '/About' element={<About/>}/>
    <Route path = '/AskChip' element={<AskChip/>}/>
    <Route path = '/StarWars' element={<StarWars/>}/>
    <Route path = '/Pokemon' element={<Pokemon/>}/>
    <Route path = '/Restaurants/*' element={<Restaurants/>}/>
  </Routes>
  </main>
</>


  );
}
 
export default Navbars