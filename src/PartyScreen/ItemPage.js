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
      .get(`https://party-planner-app.herokuapp.com/party/find/${id}`)
      .then((res) => {
        setPartyName(res.data.name);
        setPartyItems(res.data.items);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const deleteFunction = (index) => {
    axios
      .post(
        `https://party-planner-app.herokuapp.com/party/deleteItem/${index}`,
        { code: id }
      )
      .then((res) => {
        setPartyItems(res.data.items);
      });
  };
  return (
    <div className="pageBackground">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="partyNameHeader">{partyName}</div>
      </Link>
      <br />
      <p className="ItemsText">Items:</p>
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
      <Link className="addItem" to={linkURL}>
        Add Item
      </Link>
    </div>
  );
}

export default ItemPage;
