import { useEffect, useState } from "react";
import "./style/styleHotel.css";
import { listHotel, deleteHotel } from "../linkAPI/linkAPI";
import { Link } from "react-router-dom";

//========= component Hotel =============================================
export function Hotel() {
  const [dt, setDt] = useState(null);

  useEffect(() => {
    fetch(listHotel)
      .then((x) => x.json())
      .then((y) => setDt(y))
      .catch((er) => console.log(er.message));
  }, []);

  function deleteHT(id) {
    fetch(deleteHotel + "?id=" + id)
      .then((x) => x.json())
      .then((y) => {
        alert(y.msg);
        fetch(listHotel)
          .then((x) => x.json())
          .then((y) => setDt(y))
          .catch((er) => console.log(er.message));
      })
      .catch((er) => alert(er.message));
  }
  return (
    <div className="body">
      <div className="main1">
        <div className="head">
          <h2>Hotel list</h2>
          <Link to={"/addhotel"}>Add New</Link>
        </div>
        <table>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Title</th>
            <th>City</th>
            <th>Action</th>
          </tr>
          {dt &&
            dt.map((x) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.type}</td>
                <td>{x.title}</td>
                <td>{x.city}</td>
                <td>
                  <Link to={"/updatehotel/" + x.id}>Update</Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.confirm("Bạn thật sự muốn xóa?"))
                        deleteHT(x.id);
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
