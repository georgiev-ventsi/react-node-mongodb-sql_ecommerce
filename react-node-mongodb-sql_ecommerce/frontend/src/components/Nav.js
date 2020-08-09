import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// import { BurgerIcon } from './'
import styled from "styled-components";

// import logo
import SmallLogo from "../logos/logo/small_logo.png";

const Navigation = styled.header`
  position: fixed;
  width: 100%;
  border-bottom: 1px dashed #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  margin-bottom: 60px;
  background: #45ccb8;
  opacity: 0.95;

  .logo{
      max-width: 6rem;
      max-height: 6rem;
      margin-left: 5rem;
  }

  .logo > a > img{
    border-radius: 50%;
  }
  
  .gray {
    color: #ccc;
  }
  a {
    color: #fff;
    opacity: 0.80;
    transition: all 0.5s;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #fff;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 3rem;
      justify-content: space-between;
      font-size: 3rem;
    }
    a {
      font-size: 3rem;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: fixed;
    .logo {
      width: 100%;
      display: block;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
      img {
      opacity: 1;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 2rem;
      right: 2rem;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 20px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }
    render() {
        const { isExpanded } = this.state;

        return (
            <Navigation>
                <div className="logo">
                    <Link to="/">
                        <img src={SmallLogo} alt="small-logo" />
                    </Link>
                </div>
                <nav className="nav">
                    <i
                        className="fa fa-bars"
                        aria-hidden="true"
                        onClick={e => this.handleToggle(e)}
                    />
                    <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <NavLink activeClassName="active" to="/">
                            <li>home</li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/chainsaws">
                            <li>резачки</li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/contact">
                            <li>contact</li>
                        </NavLink>
                    </ul>
                </nav>
            </Navigation>
        );
    }
}

export default Nav;