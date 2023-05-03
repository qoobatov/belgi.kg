import React from "react";
import "./Production.css";
import { Button} from "antd";
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
    navigate("/new-order");
  };

  return (
    <>
      <div>
        <Button
          type="primary"
          className="btn-production-back"
          onClick={onClickBackNewOrder}
        >
          назад
        </Button>
        {showNewOrder && navigate("/new-order")}
      </div>
    </>
  );
}

export default Production;
