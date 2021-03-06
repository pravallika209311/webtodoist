import { ReactComponent as Inboxsvg } from "./public/static/images/inboxsvg.svg";
import { ReactComponent as Todaysvg } from "./public/static/images/todaysvg.svg";
import { ReactComponent as Upcomingsvg } from "./public/static/images/upcomingsvg.svg";

const Menu = () => {
  return (
    <div>
      <div className="leftpanel">
        <div className="menudisplay">
          <ul>
            <li className="inbox">
              <Inboxsvg width="16" height="20" marginRight="10"></Inboxsvg>
              <a href="inbox" className="space"> Inbox</a>
            </li>
            <li className="today svgcolor">
              <Todaysvg width="16" height="20"></Todaysvg>
              <a href="today" className="space"> Today</a>
            </li>

            <li className="upcoming">
              <Upcomingsvg width="13" height="15"></Upcomingsvg>
              <a href="upcoming" className="space">Upcoming</a>
            </li>
          </ul>
          <div className="panel">
            Projects</div>
            <div id ="innerpanel">
                <ul className="listitems">
            <li className="welcome" >Welcome</li>
            <li className="tryboards"> Try Boards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
