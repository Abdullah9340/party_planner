import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="pageBackground">
      <Link to="/" style = {{textDecoration :'none'}}>
      <div className="header">
        <p>Party Planner</p>
      </div>
      </Link>
      <Link to="/joinParty">
        <div className="joinButton">Join Party</div>
      </Link>
      <Link to="/createParty">
        <div className="createButton">Create Party</div>
      </Link>
      <div className="welcomeText">
        <p>Welcome to Party Planner</p>
        <p>Would you like to join an existing party or create a new one?</p>
      </div>
    </div>
  );
}

export default App;
