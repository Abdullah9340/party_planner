import "./ItemPage.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useHistory } from "react-router";

function AddItem() {
  const [username, setUsername] = useState("");
  const [item, setItem] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const { id } = useParams();
  const history = useHistory();
  const createItem = () => {
    axios
      .post(`http://localhost:5000/party/${id}/addItem`, {
        item: { name: item, user: username },
      })
      .then(() => {
        setStatusMessage("Item Created");
        history.push(`/itemsPage/${id}`);
      })
      .catch((err) => {
        setStatusMessage("Error Occured");
        console.log(err);
      });
  };

  return (
    <div className="pageBackground">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header">
          <p>Party Planner</p>
        </div>
      </Link>
      <div className="partyNameHeader">{id}</div>
      <br />
      <p>Who is Bringing The Item?</p>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <p>What is the Item?</p>
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <br/>
      <button onClick={createItem}>Add Item</button>
      <br/>
      <textarea
        value={statusMessage}
        className="statusMessage"
        readOnly
      ></textarea>
    </div>
  );
}

export default AddItem;
