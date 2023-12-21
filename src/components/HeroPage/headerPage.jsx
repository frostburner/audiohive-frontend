import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const HeaderPage = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <>
      <header className="header">
        <h1>Welcome to AudioHive</h1>
      </header>
      <div className="container">
        {/* SA WRAPPER KA BUTANG CONTENT  */}
        <div className="wrapper">
          <div className="content-30">
            <div className="circle"></div>
          </div>
          <div className="content-70">content-70</div>
        </div>
        {/* SA WRAPPER KA BUTANG CONTENT  AND CONTENT-30 DIRA IMO IMAGE */}
        <div className="wrapper">
          <div className="content-70"></div>
          <div className="content-30">
            <div className="circle"></div>
          </div>
        </div>
        {/* SA WRAPPER KA BUTANG CONTENT  */}
        <div className="wrapper">
        <div className="content-30">
            <div className="circle"></div>
          </div>
          <div className="content-70"></div>      
        </div>
      </div>
      <div className="cta">
        <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore porro nam ab odit, ratione possimus iusto aperiam architecto doloremque, fuga expedita ea doloribus ipsum?</p>
          <button onClick={handleJoinNow}>Join Now</button>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
