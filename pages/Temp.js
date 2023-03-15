import axios from "axios";
import React from "react";

const Temp = () => {
  const req = async () => {
    axios
      .post("http://kzico.runflare.run/user/login", {
        email: "Fred",
        password: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        console.log("hello");
      });
  };
  return (
    <div>
      <button onClick={req}>Hello</button>
    </div>
  );
};

export default Temp;
