import React from "react";
import { v4 as uuidv4 } from "uuid";
const Show = () => {
  const data = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : [];
  console.log(data);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            console.log(uuidv4());
            // console.log(user.name);
            return (
              <tr key={uuidv4()}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
          {/* <tr>
            <td>CES-9000</td>
            <td>50mt</td>
            <td>9mm</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default Show;
