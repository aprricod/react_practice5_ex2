import { Col, Row, Statistic } from "antd";
import React from "react";
import "./App.css";

function App() {
  const USERS = [
    { name: "Ivan", age: "10" },
    { name: "Roman", age: "20" },
    { name: "Sveta", age: "30" },
    { name: "Vasya", age: "30" },
    { name: "Katya", age: "30" },
    { name: "Dima", age: "30" },
    { name: "Igor", age: "30" },
    { name: "Nikita", age: "30" },
    { name: "Stepa", age: "30" },
    { name: "Stas", age: "30" },
    { name: "Artem", age: "30" },
    { name: "Natalia", age: "30" },
    { name: "Max", age: "30" },
    { name: "Vova", age: "30" },
    { name: "Lucy", age: "30" },
    { name: "German", age: "30" },
  ];
  const getUser = ({ name, age }, key) => {
    return (
      <div key={key.toString()}>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Имя:" value={name} />
            {/* <p>Имя: {name}</p> */}
          </Col>
          <Col span={12}>
            <Statistic title="Возраст:" value={age} />
            {/* <p>Возраст: {age}</p> */}
          </Col>
        </Row>

        <hr />
      </div>
    );
  };

  return (
    <div className="App">
      <div>{USERS.map((user, key) => getUser(user, key))}</div>
    </div>
  );
}

export default App;
