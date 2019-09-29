import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="section-about" id="section-about">
        <div className="row">
          <div className="col s6">
            <h3 className="center">О нас</h3>
          </div>
          <div className="col s6 center">
            <img
              className="responsive-img bereginya"
              src="../static/img/Bereginya-drugoy-shrift.gif"
            />
          </div>
        </div>
        <div className="row section-row">
          <div className="col s6">
            <img
              id="about-img"
              className="responsive-img"
              src="../static/img/about-mountains.jpg"
            />
          </div>
          <div className="col s6">
            <p>
              Берегиня – это молодой и современный сервис , который облегчает
              взаимодействие туриста и государственных заповедников при покупке
              билетов для посещения этих зон
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
