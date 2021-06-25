import React from "react";
import "./Style.css";
import Data from "./Data.json";

export default function Card({ title, body }) {
  const productList = Data.products;
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div  class="grid-container">
      {users.map(function (user) {
        return (
          <div>
            <div className="card-container">
              <div className="image-container">
                <img key={user.avatar} src={user.avatar} alt="" />
              </div>
              <div className={"card-title"}>
                <h3>{user.first_name}</h3>
              </div>
              <div className={"card-body"}>
                <p>{user.email}</p>
              </div>
              <div className={"btn"}>
                <button>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
     </div>
    
  );
}

