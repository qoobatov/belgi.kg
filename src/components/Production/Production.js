import React from "react";
import "./Production.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Production() {
  const [showNewOrder, setshowNewOrder] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nameOrder: "",
    category: "",
    desc: "",
    quantity: "",
    materialOrder: "",
    sample: "",
    delivery: "",
    orderDeadline: "",
    payment: "",
    moreServices: "",
    comments: "",
  });

  const onChangeSelected = (e) => {
    setFormValues((formValues) => {
      return {
        ...formValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onClickBackNewOrder = () => {
    setshowNewOrder(true);
    navigate("/neworder");
  };

  return (
    <>
      <div>
        <h1>Production</h1>
      </div>
    </>
  );
}

export default Production;
