import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function CreateParty() {
  const [partyCode, setPartyCode] = useState("");
  const [partyName, setPartyName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const onChangePartyCode = function (e) {
    setPartyCode(e.target.value);
  };

  const onChangePartyName = function (e) {
    setPartyName(e.target.value);
  };

  const createParty = async function (e) {
    e.preventDefault();
    const res = await getCodeData();
    if (res.data !== null) {
      if (partyCode.length === 0) {
        alert("Name must be atleast 3 Characters. Code must be atleast 5.");
      } else {
        alert("Party Code is already in use");
      }
    } else if (partyCode.length < 5 || partyName.length < 3) {
      alert("Name must be atleast 3 Characters. Code must be atleast 5.");
    } else {
      const Party = {
        name: partyName,
        code: partyCode,
      };
      axios.post("https://party-planner-app.herokuapp.com/party/add", Party);
      setPartyCode("");
      setPartyName("");
      alert("Party Added.");
      /*       setTimeout(() => {
        setStatusMessage("");
      }, 3000); */
    }
  };

  const getCodeData = async function () {
    if (partyCode === "") {
      return { data: null };
    }
    return axios
      .get(`https://party-planner-app.herokuapp.com/party/find/${partyCode}`)
      .then((res) => res);
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
        <p>Party Name</p>
        <input
          type="search"
          id="searchParty"
          value={partyName}
          onChange={onChangePartyName}
        />
        <p>Party Code</p>
        <input
          type="search"
          id="searchParty"
          value={partyCode}
          onChange={onChangePartyCode}
        />
        <br />
        <button onClick={createParty}>Create Party</button>
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

export default CreateParty;
