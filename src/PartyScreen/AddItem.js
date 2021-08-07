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
      .post(`https://party-planner-app.herokuapp.com/party/${id}/addItem`, {
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
        <div className="partyNameHeader">{id}</div>
      </Link>
      <br />
      <p className = "ItemsText">Who is Bringing The Item?</p>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <p className = "ItemsText">What is the Item?</p>
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
