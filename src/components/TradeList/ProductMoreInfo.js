import React from "react";
import { useNavigate } from "react-router-dom";


function ProductMoreInfo() {

  const navigate = useNavigate();

  return (
    <>
      <div className="BulkMoreInfo-container">
        <div className="BulkMoreInfo-content">
          <div className="BulkMoreInfo-title">
            <h4>Название</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor aluscipit?</p>
          </div>
          <div>
            <h4>Описание заказа</h4>
            <p>Lorem, ipsum dolor sit amet consecteturlorem doloremque repellat sunt sapiente dignissimos.</p>
          </div>
          <div>
            <h4>Описание заказа</h4>
            <p>Lorem, ipsum dolor sit amet olorem doloremque repellat sunt sapiente dignissimos.</p>
          </div>
          <div>
            <h4>Описание заказа</h4>
            <p>Lorem, ipsum dolor sit amet olorem doloremque repellat sunt sapiente dignissimos.</p>
          </div>
          <div>
            <h4>Описание заказа</h4>
            <p>Lorem, ipsum dolor sit amet olorem doloremque repellat sunt sapiente dignissimos.</p>
          </div>
          <div>
            <h4>Описание заказа</h4>
            <p>Lorem, ipsum dolor sit amet olorem doloremque repellat sunt sapiente dignissimos.</p>
          </div>
          <div>
            <h4>Описание заказа</h4>
            <p>Lorem, ipsum dolor sit amet olorem doloremque repellat sunt sapiente dignissimos.</p>
          </div>
          <button className="BulkMoreInfo-btn" onClick={() => navigate("/production-list")}>Назад</button>
        </div>
      </div>
    </>
  );
}

export default ProductMoreInfo;
