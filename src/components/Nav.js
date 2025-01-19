import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Nav = () => {
  // for setting border bottom once user scrolls
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return(
    <StyledNav scrolled={scrolled}>
      <h1>
        <Link id="logo" to="/">
          bdmae
        </Link>
      </h1>
      <ul>
      <li className="hide-on-mobile">
        <Link to="/">who am I?</Link>
      </li>
      <li className="hide-on-mobile">
        <Link to="/work">projects</Link>
      </li>
        <li>
          <Link to="/contact">
            <i class="ph ph-envelope-simple"></i>
          </Link>
        </li>
      </ul>
    </StyledNav>

  );
};

//be careful not to call the const variable 'Nav' because it
// might cause problems later, since our tag name is called nav

const StyledNav = styled.nav`
  background-color: ${(props) => (props.scrolled ? "#000" : "#FEF9EE")};
  color: ${(props) => (props.scrolled ? "#fff" : "#000")};
  min-height: 8vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(${(props) => (props.scrolled ? "1" : "0")});
    transform-origin: left;
    transition: transform 0.8s ease-in-out;
  }

  a {
    color: ${(props) => (props.scrolled ? "#fff" : "#000")};
    text-decoration: none;
    transition: color 0.3s ease-in-out; /* Ensure links also transition */
    font-family: 'Helvetica', sans-serif;
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
    font-weight: bold;
    padding-left: 10rem;
    position: relative;
  }

  .hide-on-mobile {
    display: inline-block;
  }

  @media (max-width: 1100px) {
    padding: 1rem 1rem;
    .hide-on-mobile {
      display: none;
    }

    ul li {
      display: block;
    }
  }
`;


export default Nav;
