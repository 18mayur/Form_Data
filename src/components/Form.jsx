import React from "react";
import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { name, email, password };
    // let oldData;
    const storeData = window.localStorage.getItem("userData")
      ? JSON.parse(window.localStorage.getItem("userData"))
      : [];
    // if (oldData != null) {
    //   oldData = storeData;
    //   oldData = JSON.parse(storeData);
    // } else {
    //   oldData = [];
    // }
    // console.log(storeData[0]["name"]);
    const updatedvalues = [...storeData, newData];
    setValues(updatedvalues);
    window.localStorage.setItem("userData", JSON.stringify(updatedvalues));
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleClear = () => {
    window.localStorage.removeItem("userData"),
      alert("Localstores are Closed by....");
  };
  return (
    <div>
      <div className="container">
        <input
          type="text"
          name="username"
          value={name}
          placeholder="Enter username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="Email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="Password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex gap-3">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
