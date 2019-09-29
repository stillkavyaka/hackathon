import React, { Component } from "react";

class ReserveMap extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const elems = document.querySelectorAll(".modal");
    const instances = M.Modal.init(elems, {});
  }
  render() {
    return (
      <section className="section-map" id="section-map">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h3>Карта</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <img className="responsive-img" src="../static/img/map-map.png" />
          </div>
        </div>
        <div className="row section-row">
          <div className="col s12">
            <div className="container">
              <ul className="parks">
                <li>
                  <img
                    className="responsive-img icon"
                    src="../static/img/sochi.png"
                  />
                  <a
                    className="waves-effect waves-light modal-trigger"
                    href="#modal_sochi"
                  >
                    Сочинский национальный парк
                  </a>
                </li>
                <li>
                  <img
                    className="responsive-img icon"
                    src="../static/img/kavkaz.png"
                  />
                  Кавказский Государственный биосферный заповедник
                </li>
              </ul>

              <div id="modal_sochi" className="modal">
                <div className="modal-content"></div>
                <div className="modal-footer">
                  <a
                    href="#!"
                    className="modal-close waves-effect waves-blue btn-flat"
                  >
                    Agree
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ReserveMap;
