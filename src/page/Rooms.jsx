import { useEffect, useState } from "react";
import "./style/styleDasboard.css";
import { listroom, deleteroom } from "../linkAPI/linkAPI";
import { Link } from "react-router-dom";

//========== component Rooms ============================================
export function Rooms() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(listroom)
      .then((x) => x.json())
      .then((y) => setList(y))
      .catch((er) => console.log(er.message));
  }, []);
  function dellete(id) {
    fetch(deleteroom + "?id=" + id)
      .then((x) => x.json())
      .then((y) => {
        alert(y.msg);
        fetch(listroom)
          .then((x) => x.json())
          .then((y) => setList(y))
          .catch((er) => console.log(er.message));
      })
      .catch((er) => alert(er.message));
  }
  return (
    <div className="body">
      <div className="main">
        <div className="head">
          <h2>Rooms list</h2>
          <Link to={"/addroom"}>Add New</Link>
        </div>
        <table>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>MaxPeople</th>
            <th>Action</th>
          </tr>
          {list.map((x) => (
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>{x._id}</td>
              <td>{x.title}</td>
              <td>{x.desc}</td>
              <td>{x.price}</td>
              <td>{x.maxPeople}</td>
              <td>
                <Link to={"/updateroom/" + x._id}>Update</Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.confirm("thật sự muốn xóa?")) dellete(x._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
