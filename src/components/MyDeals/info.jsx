import { useState } from "react";
import { deals } from "./deals";

const Info = () => {
  const path = location.pathname.substring(25);
  console.log(path);
  const [desc, setDesc] = useState("");
  deals.map((item, index) => {
    if (path === item.id) {
      setDesc(item.desc);
      return console.log(item.id);
    }
  });
  return <div>{desc && desc}</div>;
};

export default Info;
Math.random();
