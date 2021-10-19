import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleSignOut, initializeLoginFramework } from '../Login/LoginManager';
import logo from "../../images/logo1.png";
import './Header.css'

const Header = () => {
    const { loggedInUser, setLoggedInUser, setNewUser } = useContext(UserContext);

    initializeLoginFramework();
    const signOut = () => {
        handleSignOut()
            .then(res => {
                setLoggedInUser(res)
            })
    }

    return (
      <Navbar
        className="py-4 header-bg"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            className="py-0"
            as={Link}
            to="/"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            <img src={logo} className="" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Nav.Link as={Link} to="/" style={{ fontWeight: "500" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ fontWeight: "500" }}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ fontWeight: "500" }}>
                Contact
              </Nav.Link>
              {loggedInUser?.isSignedIn ? (
                <>
                  {
                    <OverlayTrigger
                      trigger="click"
                      key="bottom"
                      placement="bottom"
                      overlay={
                        <Popover id="popover-positioned-bottom">
                          <div className="d-flex justify-content-center mt-1">
                            <Image
                              style={{ maxWidth: "60px" }}
                              src={loggedInUser.photo}
                              roundedCircle
                            />
                          </div>
                          <Popover.Content>
                            <strong className="text-center">
                              {loggedInUser.email}
                            </strong>
                            <div className="d-flex justify-content-center mt-1">
                              <Button
                                onClick={signOut}
                                variant="outline-danger"
                                className="shadow-none py-0 px-1"
                                size="sm"
                              >
                                Logout
                              </Button>
                            </div>
                          </Popover.Content>
                        </Popover>
                      }
                    >
                      <Nav.Link style={{ fontWeight: "700", color: "white" }}>
                        {loggedInUser.name}
                      </Nav.Link>
                    </OverlayTrigger>
                  }
                </>
              ) : (
                <>
                  <Nav.Link
                    onClick={() => setNewUser(false)}
                    as={Link}
                    to="/login"
                    style={{ fontWeight: "500" }}
                  >
                    Sign In
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => setNewUser(true)}
                    as={Link}
                    to="/login"
                    style={{ fontWeight: "500" }}
                  >
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;