import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";

function Update(props) {
  const location = useLocation();
  const { uid } = location.state;
  const { name } = location.state;
  const { mail } = location.state;

  let [userName, setName] = React.useState("NA");
  let [userMail, setUserMail] = React.useState("NA");
  function updateData(update) {
    update.preventDefault();

    (function read() {
      axios.put(
        "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users/" + uid,
        { id: uid, name: userName, email: userMail }
      );
    })();
  }
  function nameData(obj) {
    setName(obj.target.value);
  }
  function emailData(obj) {
    setUserMail(obj.target.value);
  }

  return (
    <form className=" container mt-3" onSubmit={updateData}>
      <label>Name</label>
      <input
        className="form-control col-md-6"
        onChange={(e) => nameData(e)}
        defaultValue={name}
      />
      <br />
      <label>Email</label>
      <input
        className="form-control col-md-6"
        type="email"
        defaultValue={mail}
        onChange={(e) => emailData(e)}
      />
      <br />
      <button className="form-control col-md-6 badge-primary" type="submit">
        Update
      </button>
    </form>
  );
}

export default Update;
