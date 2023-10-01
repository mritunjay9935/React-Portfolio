import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/IMG_20220928_160500 (2).jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hy! Am</h1>
        <h2 className="fullname">Mritunjay Mishra</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Full Stack Developer 🚀",
              1000,
              "Frontend Developer ✅",
              1000,
              "Backend Developer 🏆",
              1000,

              "React Developer ⚛️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
        Hey,
I was wondering if you can consider me for the Software Engineer role(Nodejs, Python).
Or can you please refer me to the person who is hiring for the above role in your Org?

        </p>
        {/* payment links */}
        <div className="header-payment-container">
        <a href="https://drive.google.com/file/d/1iFlobOEcn48hCITjZSK6P1Smh_MgxsDw/view?usp=sharing">
        <button>Hire Me</button>
          </a>
          
          <i className="fa-brands fa-paypal"></i>
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-mastercard"></i>
          <i class="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
