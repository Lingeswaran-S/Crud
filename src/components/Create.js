import React from "react";
import axios from "axios";
function Create(props) {
  let [name, setName] = React.useState("");
  let [mail, setMail] = React.useState("");
  function nameProcess(data) {
    setName(data.target.value);
  }
  function mailProcess(data) {
    setMail(data.target.value);
  }
  function postData(name, mail) {
    axios
      .post("https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users", {
        name: name,
        email: mail,
      })
      .catch((err) => {
        console.log("Error in creating");
      });
  }
  function submitData(submit) {
    submit.preventDefault();
    postData(name, mail);
    console.log("submitData reached");
  }

  return (
    <form className=" container mt-3" onSubmit={submitData}>
      <label>Name</label>
      <input
        className="form-control col-md-6"
        type="text"
        onChange={(d) => nameProcess(d)}
      />
      <br />
      <label>Email</label>
      <input
        className="form-control col-md-6"
        type="email"
        onChange={(d) => mailProcess(d)}
      />
      <br />
      <button className="form-control col-md-6 badge-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Create;
