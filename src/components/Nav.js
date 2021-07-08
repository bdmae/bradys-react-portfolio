import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return(
    <StyledNav>
      <h1><a href="#" id="logo">bdmae</a></h1>
      <ul>
        <li>
          <a href="#">Who am I?</a>
        </li>
        <li>
          <a href="#">My work</a>
        </li>
        <li>
          <a href="#">Contact me</a>
        </li>
      </ul>
    </StyledNav>

  );
};

//be careful not to call the const variable 'Nav' because it
// might cause problems later, since our tag name is called nav

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #F4EBE5;
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
