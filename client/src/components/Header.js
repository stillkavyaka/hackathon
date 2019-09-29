"use strict";

import React, { Component } from "react";
import M from "materialize-css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      instance_sidenav: null
    };
  }
  componentDidMount() {
    const elem = document.querySelector(".sidenav");
    const instance = M.Sidenav.init(elem, {});
    this.setState({
      instance_sidenav: instance
    });
  }
  render() {
    return (
      <header id="showcase">
        <div className="container">
          <div className="row">
            <div className="menu right col s9">
              <a href="#section-about" className="waves-effect waves-light btn">
                О нас
              </a>
              <a href="#section-map" className="waves-effect waves-light btn">
                Карта
              </a>
              <a href="#" className="waves-effect waves-light btn">
                Правила
              </a>
              <a
                href="#section-ticket"
                className="waves-effect waves-light btn"
              >
                Купить
              </a>
            </div>
          </div>
        </div>
        <div className="title">
          <h1>Берегиня</h1>
          <p>Оформление и покупка пропуска в заповедники РФ в онлайн режиме</p>
          <a href="#section-about" className="waves-light btn">
            Подробнее
          </a>
        </div>
        <div className="title_bottom">
          <p>Перейти к чат-боту Лаба</p>
          <p>Мессенжер Серафим</p>
        </div>
      </header>
    );
  }
}

export default Header;
