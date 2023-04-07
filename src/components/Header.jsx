import React, { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const NavMenuStyle = styled.nav`
position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  background: #262626;
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 2rem;
      font-size: 1.2rem;
      outline: none;
      text-decoration: none;
      color: white;
      transition: color .5s, background .5s;
    }
    a:hover {
        color: #5e9aaf;
        background: #212121;
        border-radius: 8px;
        padding: 1rem 2rem;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    font-size: 3rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItem .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - 1rem));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItem {
      transition: 0.3s ease transform;
      background-color: black;
      padding: 0.3rem 3rem 3rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: 0.5rem;
      .closeNavIcon {
        color: white;
        display: block;
        width: 1.5rem;
        font-size: 3.5rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

function Header() {
    const [showNav, SetShowNav] = useState(false);
  return (
    <header>

        <NavMenuStyle>
        <div className="mobile-menu-icon"
        onClick={() => SetShowNav(!showNav)}
        role="button"
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}  
        >
            <MdMenu />
        </div>
            <ul className={!showNav ? 'navItem hide-item' : 'navItem'}>
                <div className="closeNavIcon"
                onClick={() => SetShowNav(!showNav)}
                role="button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex={0}                
                >
                    <MdClose />
                </div>
                <li>
                    <Link to="/" exact
                    onClick={() => SetShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => SetShowNav(!showNav)}
                    tabIndex={0}  
                    >Home</Link>
                </li>
                {/* <li>
                    <Link to="/blog">Blog</Link>
                </li> */}
                <li>
                    <Link to="/about"
                    onClick={() => SetShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => SetShowNav(!showNav)}
                    tabIndex={0}                      
                    >About</Link>
                </li>
                <li>
                    <Link to="/works"
                    onClick={() => SetShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => SetShowNav(!showNav)}
                    tabIndex={0}                      
                    >Works</Link>
                </li>
                <li>
                    <Link to="/contact"
                    onClick={() => SetShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => SetShowNav(!showNav)}
                    tabIndex={0}                      
                    >Contact</Link>
                </li>
            </ul>
        </NavMenuStyle>
    </header>
  )
}

export default Header