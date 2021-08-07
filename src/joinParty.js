import "./App.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function JoinParty() {
  const [partyCode, setPartyCode] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const history = useHistory();

  const onChangeText = function (e) {
    setPartyCode(e.target.value);
  };
  const searchForParty = function (e) {
    e.preventDefault();
    axios
      .get(`https://party-planner-app.herokuapp.com/party/find/${partyCode}`)
      .then((res) => {
        if (res.data !== null) {
          history.push(`/itemsPage/${partyCode}`);
        } else {
          setStatusMessage("Party Not Found");
        }
      });
  };

  return (
    <div className="pageBackground">
      <Link to="/" style={{ textDecoration: "none" }}>
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
      <div className="searchBox">
        <p>What is your party code?</p>
        <input
          type="search"
          id="searchParty"
          value={partyCode}
          onChange={onChangeText}
        />
        <button onClick={searchForParty}>Search</button>
        <br />
        <textarea
          value={statusMessage}
          className="statusMessage"
          readOnly
        ></textarea>
      </div>
    </div>
  );
}

export default JoinParty;
