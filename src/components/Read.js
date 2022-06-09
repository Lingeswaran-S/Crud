import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Read() {
  const sty = {
    tableLayout: "fixed",
    width: "100%",
  };
  let [arrayList, setArrayList] = React.useState([]);
  useEffect(() => {
    (function readData() {
      axios
        .get("https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users")
        .then((res) => setArrayList(res.data));
    })();
  });
  function deleteData(id) {
    console.log("delete rached !");
    console.log(id);
    (function read() {
      axios.delete(
        "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users/" + id
      );
    })();
  }
  //   function updateData(id) {
  //     console.log("update rached !");
  //     console.log("update " + id);
  //     <Link to="/update">Update</Link>;
  //     // (function read() {
  //     //   axios.put(
  //     //     "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users/1",
  //     //     { id: "1", name: "thiru", email: "123123" }
  //     //   );
  //     // })();
  //   }

  return (
    <ul className="list-group pt-5">
      <li class="list-group-item list-group-item-warning">
        <strong className="mr-4">Name</strong>
        <strong className="ml-5">Email</strong>
      </li>
      {arrayList.map((data) => {
        return (
          <li class="list-group-item list-group-item-primary" key={data.id}>
            <table style={sty} className="table table-borderless">
              <tr>
                <td>{data.name}</td>
                <td> {data.email}</td>
                <tr>
                  <td>
                    {/* <button onClick={() => updateData(data.id)}>Update</button> */}
                    <Link
                      to={{
                        pathname: "/update",
                        state: {
                          uid: data.id,
                          name: data.name,
                          mail: data.email,
                        },
                      }}
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => deleteData(data.id)}>Delete</button>
                  </td>
                </tr>
              </tr>
            </table>
          </li>
        );
      })}
    </ul>
  );
}

export default Read;
