import React, { Component } from "react";
import "./PageHeader.scss";
import { Link, NavLink } from "react-router-dom";
import greenWiseLogo from "../../assets/images/images/greenwise-logo.svg";
import menuIcon from "../../assets/images/icons/menu-icon.png";
import menuIconClose from "../../assets/images/icons/menu-icon-close.png";

export default class PageHeader extends Component {
  state = {
    menuVisible: false,
  };

  handleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  render() {
    return (
      <header className="header">
        <div className="header__main-container">
          <Link className="header__logo-container" to="/">
            <img
              className="header__logo"
              alt="green-wise logo"
              src={greenWiseLogo}
            />
          </Link>
          <div
            onClick={this.handleMenu}
            className="header__menu-icon-container"
          >
            <img
              className="header__menu-icon"
              alt="menu icon"
              src={this.state.menuVisible ? menuIconClose : menuIcon}
            />
          </div>

          <div
            className={
              this.state.menuVisible
                ? "header__buttons-container"
                : "header__buttons-container--hidden"
            }
          >
            <div
              className={
                this.state.menuVisible
                  ? "header__buttons-subcontainer"
                  : "header__buttons-subcontainer--hidden"
              }
            >
              <NavLink className="header__link" to="/estimate">
                <h3 className="header__button-text ">
                  <span>1. Estimate&nbsp;</span>
                  <span className="span"> &gt;&gt; </span>
                </h3>
              </NavLink>
              <div className="header__button-spacer"></div>
              <NavLink className="header__link" to="/reduce">
                <h3 className="header__button-text">
                  <span>2. Reduce&nbsp;</span>
                  <span className="span"> &gt;&gt; </span>
                </h3>
              </NavLink>
            </div>
            <div className="header__button-spacer"></div>
            <div
              className={
                this.state.menuVisible
                  ? "header__buttons-subcontainer"
                  : "header__buttons-subcontainer--hidden"
              }
            >
              {" "}
              <NavLink className="header__link" to="/compensate">
                <h3 className="header__button-text">
                  <span>3. Compensate&nbsp;</span>
                  <span className="span"> &gt;&gt; </span>
                </h3>
              </NavLink>
              <div className="header__button-spacer"></div>
              <NavLink className="header__link" to="/my-account">
                <h3 className="header__button-text">
                  <span>My Account&nbsp;</span>
                  <span className="span"> &gt;&gt; </span>
                </h3>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
