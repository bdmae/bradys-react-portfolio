import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
  return(
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          bdmae
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Who am I?</Link>
        </li>
        <li>
          <Link to="/work">My projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact me</Link>
        </li>
      </ul>
    </StyledNav>

  );
};

//be careful not to call the const variable 'Nav' because it
// might cause problems later, since our tag name is called nav

const StyledNav = styled.nav`
  min-height: 8vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: black;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;

  }
  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;


export default Nav;
