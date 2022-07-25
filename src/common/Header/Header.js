import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logOutUser } from "../../actions/Auth/index";
import { Navbar, Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { useNavigate, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ logOutUser, isAuthenticated }) => {
  const activeStyle = { color: "#F15B2A" };
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  function handleClick() {
    logOutUser();
  }

  return (
    <Navbar bg="light" expand="sm">
      <NavLink to="/" activeStyle={activeStyle} exact className="navbar-brand">
        Home
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {isAuthenticated ? (
          <Nav className="mr-auto navbar-right-section">
            {/* <NavLink
              to="/account"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Account
            </NavLink> */}
            <a href="" className="nav-link" onClick={handleClick}>
              Logout
            </a>
          </Nav>
        ) : (
          <Nav className="mr-auto navbar-right-section">
            {/* <NavLink
              to="/register"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Register
            </NavLink> */}
            <NavLink to="/login" activeStyle={activeStyle} className="nav-link">
              Login
            </NavLink>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapDispatchToProps = {
  logOutUser: logOutUser,
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  isAuthenticated: state.userReducer.isAuthenticated,
});
Header.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.

  logOutUser: PropTypes.func,
  isAuthenticated: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
