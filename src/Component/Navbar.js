import {Link} from 'react-router-dom'

import { Navbar , Nav , Container} from 'react-bootstrap'
const Navbars = () => {
    return(
        <div>
 <Navbar collapseOnSelect expand="lg"  className='Navbar'  variant="dark">
  <Container>
  <img style={{ fontSize: 15, fontWeight: 300, height: 80,  }} alt='' src='http://localhost:3001/uploads/swachh_bharart_logo.png'></img>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={{color:'red'}}/>
  <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor:'#A9E1BD'}}>
    <Nav className="me-auto" style={{marginTop:10}}>
  <Link to={'/about'}>  <Nav  style={{color:'black' ,  marginLeft:20}} > WHAT WE DO</Nav> </Link> 
  <Link to={'/programmes'}>  <Nav   style={{color:'black', marginLeft:20}} >PROGRAMMES</Nav> </Link> 
  <Link to={'/volunteer'}>  <Nav   style={{color:'black', marginLeft:20}} >VOLUNTEER</Nav> </Link> 
  <Link to={'/pledge'}>   <Nav  style={{color:'black', marginLeft:20}}  >TAKE A PLEDGE</Nav> </Link> 
  <Link to={'/contact'}>  <Nav   style={{color:'black', marginLeft:20}} >CONTACT US</Nav>  </Link>
  <Link to={'/donate'}>  <Nav   style={{color:'black', marginLeft:145, padding: 10,background:'white'}} >DONATE NOW </Nav> </Link>
    </Nav>
  </Navbar.Collapse>
  

  </Container>
</Navbar>


        </div>
    )
}

export default Navbars;