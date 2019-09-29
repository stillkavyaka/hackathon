import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer blue-grey darken-2">
        <div className="container">
          <div className="row">
            <div className="col l3 s12">
              <img src="../static/img/Laba.png" className="laba" />
            </div>
            <div className="col l3 s12"></div>
            <div className="col l4 offset-l2 s12 links">
              <a className="grey-text text-lighten-3" href="#section-about">
                О нас
              </a>
              <a className="grey-text text-lighten-3" href="#section-map">
                Карта
              </a>
              <a className="grey-text text-lighten-3" href="#!">
                Правила
              </a>
              <a className="grey-text text-lighten-3" href="#section-ticket">
                Купить
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2019 Rocket Team</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
