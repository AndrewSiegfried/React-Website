import React from 'react'
import '../styles/restaurant.css'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Routes,Route,Link} from "react-router-dom"; 
import Makeres from './Makeres';
export default function Restaurants() {
  return (
    <div>
        <div className="d-flex justify-content-center">
          <h1 className="rest-name" style={{ color: "white" }} >Cheesy Does It Restaurant</h1>
      </div>
      <Navbar className="justify-content-center" bg="dark" variant="dark">
    <Container>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={'/Restaurants'}>Home</Nav.Link> 
        <Nav.Link as={Link} to={'/Restaurants/Makeres'}>Make Reservation</Nav.Link>
        <Routes>

    <Route path='/Restaurants' element={<Restaurants/>}/>
    <Route path = '/Restaurants/Makeres' element={<Makeres/>}/>
    </Routes>
    
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  <br/>
        <blockquote className="blockquote text-center">
          <p className="mb-0" style={{ color: "white" }}>Reservations available for Sunday brunch, lunch, or dinner!</p>
          <p style={{ color: "white" }}>Open 7 days a week</p>
        </blockquote>
        
        <div className="card-group">
          <div className="card">
            <img src="http://images.squarespace-cdn.com/content/v1/5ef388cda66259514aff6190/1610900213785-S552TPSOHG53250MPD1Y/b-brunch-min.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Sunday brunch</h5>
              <p className="card-text">Join us on Sundays for our famous Sunday brunch.
                  Every Sunday from 10am until 2pm.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://img.taste.com.au/xp00J1UY/w643-h428-cfill-q90/taste/2016/11/pork-and-bean-burrito-bowl-109208-1.jpeg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Lunch</h5>
              <p className="card-text">Our fabulous lunch menu is offered everyday between 11am and 4pm!</p>
            </div>
          </div>
          <div className="card">
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2022%2F03%2F30%2Feasy-dinner-recipes.jpg&w=400&h=268&c=sc&poi=%5B601%2C470%5D&q=60" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Dinner</h5>
              <p className="card-text">Our dinner menu is the talk of the town.  Unique entrees from our top-rated chefs, cooked fresh to order.  Dinner served 7 days a week from 4pm until 10pm.</p>
            </div>
          </div>
        </div>
        <br/>
    </div>
  )
}
