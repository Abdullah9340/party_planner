import "./ItemPage.css";
import EditIcon from "./Assets/editicon.png";
import DeleteIcon from "./Assets/deleteicon.png";

function Item(props) {
  const itemName = props.name;
  const userName = props.user;

  return (
    <div className="item">
      <p className="rightSide">Item: {itemName}</p>
      <p className="leftSide">Person: {userName}</p>
      <img className = "deleteButton "src={DeleteIcon} alt="Delete" onClick = {() => {props.deleteFunction(props.index)}}/>
    </div>
  );
}

export default Item;
