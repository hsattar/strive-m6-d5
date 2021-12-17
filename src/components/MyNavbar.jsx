import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const MyNavbar = () => (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Link to='/' className='navbar-brand'>Striveazon</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to='/office' className='nav-link'>Back Office</Link>
                    <Link to='/cart' className='nav-link'>Cart</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default MyNavbar