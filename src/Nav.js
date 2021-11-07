import { ReactComponent as Homesvg } from "./public/static/images/home2.svg";
import { ReactComponent as Magnify } from "./public/static/images/magnifyicon.svg";
import { ReactComponent as Menu } from "./public/static/images/menu.svg";
import { ReactComponent as Notify } from "./public/static/images/notify.svg";
import { ReactComponent as Addicon } from "./public/static/images/addicon.svg";
import { ReactComponent as Usericon } from "./public/static/images/usericon.svg";


<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
></link>;

const Nav = () => {
      
  return (
    <div id="navBar">
      <div className="innerbar">
        <a href="Menu" className="menusvg svglight">
          <Menu width="16" height="20"></Menu>
        </a>
        <a href="/" className="homesvg svglight">
          <Homesvg width="16" height="20"></Homesvg>
        </a>
        <div id="inputbar" className="svglight">
          <Magnify width="16" height="20"></Magnify>
          <input placeholder="Search"></input>
        </div>
        <div className="addicon svglight">
          <Addicon width="14" height="15"></Addicon>
        </div>
        <div className="notifysvg svglight">
          <Notify width="14" height="15"></Notify>
        </div>
        <div className="usersvg svglight">
          <Usericon width="14" height="15"></Usericon>
        </div>
      </div>
    </div>
  );
};

export default Nav;
