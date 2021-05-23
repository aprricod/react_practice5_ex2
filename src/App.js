import { Col, Row, Statistic } from "antd";
import React from "react";
import "./App.css";

export default class App extends React.Component {
  timer;
  state = { USERS: [] };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ USERS: json });
      });
    this.timer = setInterval(() => {
      console.log("setInterval()");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    console.log("render()");
    return (
      <div className="App">
        <div>
          {this.state.USERS?.map((user, key) => this.getUser(user, key))}
        </div>
      </div>
    );
  }

  getUser = (user, key) => {
    return (
      <div key={key.toString()}>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Имя:" value={user.name} />
            {/* <p>Имя: {name}</p> */}
          </Col>
          <Col span={12}>
            <Statistic title="Почта:" value={user.email} />
            {/* <p>Возраст: {age}</p> */}
          </Col>
        </Row>

        <hr />
      </div>
    );
  };
}
