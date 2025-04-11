import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Show = () => {
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
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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

  const handleDelete = (index) => {
    // console.log("delete data ", data.name);
    let updatedValues = [];
    for (let i = 0; i < data.length; i++) {
      if (i !== index) {
        console.log(i);
        updatedValues.push(data[i]);
      }
    }
    window.localStorage.setItem("userData", JSON.stringify(updatedValues));
    window.location.reload();
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
                  <div className="d-flex gap-2 justify-content-center align-item-center">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
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

export default Show;
