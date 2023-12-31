import React , {Component} from 'react'
import { Navbar ,Nav , Container  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'



class Header extends Component{
   
    render(){
      return (
        <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/india">India </Link>

            <Link className='nav-link' to="/world">World</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>

      )
    }
}    
 
export default Header