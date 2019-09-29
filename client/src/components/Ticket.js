import React, { Component } from "react";
import data from "../data";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      park: "sochi"
    };
  }
  componentDidMount() {
    let elem = document.querySelector(".ticket");
    const instance_select_ticket = M.FormSelect.init(elem, {});
    elem = document.querySelector(".park");
    const instance_select_park = M.FormSelect.init(elem, {});
    elem = document.querySelector(".route");
    const instance_select_route = M.FormSelect.init(elem, {});
    elem = document.querySelector("#when_issued");
    const instance_when_issued = M.Datepicker.init(elem, {
      onSelect(element) {
        this.setState({
          [elem.name]: element
        });
      }
    });
    elem = document.querySelector("#date_begin");
    const instance_date_begin = M.Datepicker.init(elem, {
      onSelect(element) {
        this.setState({
          [elem.name]: element
        });
      }
    });
    elem = document.querySelector("#date_end");
    const instance_date_end = M.Datepicker.init(elem, {
      onSelect(element) {
        this.setState({
          [elem.name]: element
        });
      }
    });
  }
  onChange = e => {
    console.log(e.target.name + " " + e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log(this.state);
    fetch("http://localhost:3001/api/order/add", {
      method: "post",
      body: JSON.stringify(this.state)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  };
  render() {
    return (
      <section className="section-ticket" id="section-ticket">
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <div className="row section-row">
              <div className="col s12 m10 offset-m1">
                <h4 className="center">Приобрести билет</h4>
                <div className="row">
                  <div className="col s8">
                    <div className="row">
                      <div className="input-field col s4">
                        <input
                          id="last_name"
                          name="last_name"
                          type="text"
                          className="validate"
                          onChange={this.onChange}
                        />
                        <label htmlFor="last_name">Фамилия</label>
                      </div>
                      <div className="input-field col s4">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="validate"
                          onChange={this.onChange}
                        />
                        <label htmlFor="name">Имя</label>
                      </div>
                      <div className="input-field col s4">
                        <input
                          id="patronymic"
                          name="patronymic"
                          type="text"
                          className="validate"
                          onChange={this.onChange}
                        />
                        <label htmlFor="patronymic">Отчество</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s5">
                        <input
                          id="birth_date"
                          name="birth_date"
                          type="text"
                          className="validate"
                          onChange={this.onChange}
                        />
                        <label htmlFor="birth_date">Дата рождения</label>
                      </div>
                      <div className="input-field col s7">
                        <input
                          id="phone_number"
                          name="phone_number"
                          type="text"
                          className="validate"
                          onChange={this.onChange}
                        />
                        <label htmlFor="phone_number">Номер телефона</label>
                      </div>
                    </div>
                    <div className="row">
                      <h6>Паспорт</h6>
                      <div className="input-field col s6">
                        <input
                          id="passport_series"
                          name="passport_series"
                          type="text"
                          className="validate"
                          onChange={this.onChange}
                        />
                        <label htmlFor="passport_series">Серия номер</label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="when_issued"
                          name="when_issued"
                          type="text"
                          className="datepicker"
                        />
                        <label htmlFor="when_issued">Когда выдан</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="issued_by"
                          name="issued_by"
                          type="text"
                          className="validate"
                          onChange={this.onChange}
                        />
                        <label htmlFor="issued_by">Кем выдан</label>
                      </div>
                    </div>
                  </div>
                  <div className="col s4 photo_field">
                    <img src="../static/img/photo_template.jpg" />
                    <div className="file-field">
                      <div className="btn">
                        <span>Загрузить фото</span>
                        <input type="file" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s4">
                    <select
                      onChange={this.onChange}
                      className="ticket"
                      name="ticket"
                    >
                      <option value="1">Взрослый</option>
                      <option value="2">Детский</option>
                      <option value="3">Детский до 7 лет</option>
                    </select>
                    <label>Категория билета</label>
                  </div>
                  <div className="input-field col s4">
                    <input
                      id="date_begin"
                      name="date_begin"
                      type="text"
                      className="datepicker"
                    />
                    <label htmlFor="date_begin">Дата начала</label>
                  </div>
                  <div className="input-field col s4">
                    <input
                      id="date_end"
                      name="date_end"
                      type="text"
                      className="datepicker"
                    />
                    <label htmlFor="date_end">Дата окончания</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <select
                      onChange={this.onChange}
                      className="park"
                      name="park"
                    >
                      <option value="sochi">Сочинский нац. парк</option>
                      <option value="kavkaz">
                        Кавказский гос. биосферный заповедник
                      </option>
                    </select>
                    <label>Выберите локации для посещения</label>
                  </div>
                  <div className="input-field col s6">
                    <select
                      onChange={this.onChange}
                      className="route"
                      name="route"
                    >
                      {data[this.state.park].map(element => {
                        return (
                          <option key={element.id} value={element.id}>
                            {element.name}
                          </option>
                        );
                      })}
                    </select>
                    <label>Выберите маршрут для посещения</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s8">
                    <p className="right">
                      <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Согласие на обработку данных</span>
                      </label>
                    </p>
                  </div>
                  <div className="col s4">
                    <button
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      Оплатить
                    </button>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Main;
