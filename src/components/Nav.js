import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

// i18n
import { useTranslation } from 'react-i18next';

const Nav = () => {
  // for setting border bottom once user scrolls
  const [scrolled, setScrolled] = useState(false);

  // i18n
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
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
      <div className="logo-wrapper">
        <Link id="logo" to="/">
          bdmae
        </Link>
        <div className="language-switcher">
          <button onClick={() => i18n.changeLanguage('en')}>🇺🇸</button>
          <button onClick={() => i18n.changeLanguage('ja')}>🇯🇵</button>
        </div>
      </div>
      <ul>
        <li className="hide-on-mobile">
          <Link to="/">who am I?</Link>
        </li>
        <div className='mobile-nav-options'>
          <li className="projects">
            <Link to="/work">projects</Link>
          </li>
            <li className="contact">
              <Link to="/contact">
                <i class="ph ph-envelope-simple"></i>
              </Link>
            </li>
        </div>
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
    font-size: 1.2rem;

  }
  #logo {
    font-size: 2rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    font-weight: bold;
    padding-left: 10rem;
    position: relative;

    @media (max-width: 1100px) {
      padding-left: 0;
    }
  }

  .mobile-nav-options {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    .contact {
      font-size: 1.8rem;
    }
  }


  .hide-on-mobile {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1100px) {
    padding: 1rem 2rem;
    .hide-on-mobile {
      display: none;
    }

    ul li {
      display: block;
      padding-left: 1rem;
    }
  }
`;


export default Nav;
