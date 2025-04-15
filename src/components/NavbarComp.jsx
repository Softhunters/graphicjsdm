import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavbarComp.css";
// import { HiSearch } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

 
const NavbarComp=()=> {
//   const [scrollLength , setScrollLength]=useState(0);

//   useEffect(()=>{
//     setScrollLength(window.scrollY);
// console.log("heyyyyyyyyyy",window.scrollY)
//   },[window.scrollY])


const [scrollLength, setScrollLength] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollLength(window.scrollY);
      console.log("Scrolled to:", window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Only run once on mount



  return (
    <Navbar expand="lg" className={`my-3  ${scrollLength<630?"fixed-top":""}`}   >
      <Container fluid   >
        <Navbar.Brand href="#"  className='nav_text'>
          {/* Rtlabs */}
          <img src="/img/logo_1.png" alt="Logo" width={100} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-2 my-lg-0 gap-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1" className='nav_text'>Home</Nav.Link> */}
            <Nav.Link > <Link to="/" className='nav_text' style={{textDecoration:"none"}}>Home</Link> </Nav.Link>
            <Nav.Link >  <Link to="/about" className='nav_text' style={{textDecoration:"none"}} >About us</Link> </Nav.Link>
            <Nav.Link   > <Link to="/courses"  className='nav_text' style={{textDecoration:"none"}}>  Course </Link></Nav.Link>
            <Nav.Link  > <Link to="/contact_us"  className='nav_text' style={{textDecoration:"none"}}>Contact us</Link></Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown" className='nav_text'>
              <NavDropdown.Item href="#action3"  className='nav_text'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" className='nav_text'>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
          {/* <HiSearch  size={30}/> */}
          <BsSearch  className='nav_text'  size={20}/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;