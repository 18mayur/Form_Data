import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { v4 as uuidv4 } from "uuid";
const Test = () => {
  const [show, setShow] = useState(false);
  const [editState, setEditState] = useState({
    index: 0,
    name: "",
    email: "",
    password: "",
  });
  // console.log(editState);
  const data = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : [];
  const handleEdit = (index) => {
    setShow(true);
    console.log(index);
    setEditState({
      index: index,
      name: data[index].name,
      email: data[index].email,
      password: data[index].password,
    });
  };
  const handleClose = () => setShow(false);

  const handleSave = () => {
    const updatedData = [...data];
    
    updatedData[editState.index] = {
      name: editState.name,
      email: editState.email,
      password: editState.password,
    };
    window.localStorage.setItem("userData", JSON.stringify(updatedData));
    setShow(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>sr no</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  {/* <button>Delete</button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container2 d-flex flex-column gap-3">
            <input
              type="text"
              name="name"
              value={editState.name}
              placeholder="Enter username"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={editState.email}
              placeholder="Enter Email"
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              value={editState.password}
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Test;
