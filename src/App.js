import Navbar from "./Nav";
import "./App.css";
import Rightbar from "./Home";
import Leftbar from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
></link>;
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="display">
        
          <Leftbar />
        
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
