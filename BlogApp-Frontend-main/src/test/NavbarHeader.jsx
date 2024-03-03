import {  faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

export const NavbarHeader = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=> setIsOpen(!isOpen);



  return (
    <>
        <div className='navbarHeader container'>

            <Navbar 
                expand='md'
                className='navbar navbar-expand-lg'
            >
                <NavbarBrand className='pe-5 fw-bold' href="/">Get Hooked</NavbarBrand>
                <NavbarToggler onClick={toggle} />

                <Collapse className='' isOpen={isOpen} navbar>
                    <Nav className="" style={{display:'flex', justifyContent:'start', alignItems:'cent'}} navbar>
                        <NavItem className='pe-3'>
                            <NavLink className='fw-semibold'  href="/home">Home</NavLink>
                        </NavItem>

                        <NavItem className='pe-3'>
                            <NavLink className='fw-semibold' href="/about">
                                About
                            </NavLink>
                        </NavItem>

                        <NavItem className='pe-3'>
                            <NavLink className='fw-semibold' href="/login">
                                Login
                            </NavLink>
                        </NavItem>

                        {/* Search bar */}
                        <NavItem className='pe-3 mt-2'>
                            <FontAwesomeIcon icon={faSearch} />
                            <input style={{borderRadius:'100px'}} type="text" placeholder="  Search"  />
                        </NavItem>

                        <NavItem className='pe-3 '>
                            <Button  style={{background:'#000', borderRadius:'100px'}} >Get Started</Button>
                        </NavItem>

                        {/* User Profile */}
                        <NavItem className='pe-3'>
                            <Button style={{borderRadius:'100px', background:'#000'}}><FontAwesomeIcon icon={faUser} /> </Button>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    </>
  )
}
