import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ItemPage.css";
import Item from "./Item";

function ItemPage() {
  const { id } = useParams();

  const [partyName, setPartyName] = useState("");
  const [partyItems, setPartyItems] = useState([]);
  const linkURL = `/addItem/${id}`;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/party/find/${id}`)
      .then((res) => {
        setPartyName(res.data.name);
        setPartyItems(res.data.items);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const deleteFunction = (index) => {
    console.log(id);
    axios
      .post(`http://localhost:5000/party/deleteItem/${index}`, { code: id })
      .then((res) => {
        setPartyItems(res.data.items);
      });
  };
  return (
    <div className="pageBackground">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header">
          <p>Party Planner</p>
        </div>
      </Link>
      <div className="partyNameHeader">{partyName}</div>
      <br />
      <p>Items:</p>
      {partyItems.map((partyItem, index) => {
        return (
          <Item
            name={partyItem.name}
            user={partyItem.user}
            deleteFunction={deleteFunction}
            key={index}
            index={index}
          />
        );
      })}
      <Link className="addItem" to = {linkURL}>Add Item</Link>
    </div>
  );
}

export default ItemPage;
