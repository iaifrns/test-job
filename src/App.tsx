import "./App.scss";
import logo from "./assets/logo1.jpg";
import pic1 from "./assets/cam.jpg";
import pic2 from "./assets/car.jpg";
import pic3 from "./assets/tom.jpg";
import { CgMenu } from "react-icons/cg";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

function App() {
  return (
    <div className="body">
      {/* top */}
      <div className="header">
        <img width={150} height={100} src={logo} />
        <div className="menu">
          <span>Nos services</span>
          <span>À propos</span>
          <span>Contact</span>
        </div>
        <CgMenu
          style={{
            fontSize: "40px",
          }}
        />
      </div>
      {/* body */}
      <div className="container">
        <div className="container1">
          <b>Hemo</b>
          <div></div>
        </div>
        <div
          className="container2"
        >
          <img src={pic1} className="img1" />
          <img src={pic2} className="img2" />
          <img src={pic3} className="img3" />
        </div>
        <div className="container3">
          <span className="title">BANTOU GROUP</span>
          <span>
            <b>H</b>armonie <br /> des <b>B</b>esoins, <b>C</b>onvergence des{" "}
            <b>S</b>olutions
          </span>
        </div>
      </div>
      {/* footer */}
      <div className="footer">
        <span>Copyright © 2024 OpenInTech. Tous droits réservés</span>
        <div className="circle">
          <div className="dot"></div>
        </div>
        <div className="icons">
          <BsFacebook style={{marginRight : 4}} />
          <IoLogoWhatsapp />
        </div>
      </div>
    </div>
  );
}

export default App;
