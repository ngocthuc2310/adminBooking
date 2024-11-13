import "./style/styleDasboard.css";
import { topmap, listTransaction } from "../linkAPI/linkAPI.js";
import { useEffect, useState } from "react";
const icons = require("../icon/icon.jsx");

//======== component Dashboard ========================================
export function Dashboard() {
  const [topMap, setTopMap] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch(topmap)
      .then((x) => x.json())
      .then((y) => {
        setTopMap(y);
      })
      .catch((er) => console.log(er));
  }, []);
  useEffect(() => {
    fetch(listTransaction)
      .then((x) => x.json())
      .then((y) => {
        setList(y);
      })
      .catch((er) => console.log(er.message));
  }, []);

  return (
    <div className="body">
      <div className="map">
        <div>
          <div>USER</div>
          <div>{topMap && topMap.user}</div>
          <div>
            <icons.Iconusers />
          </div>
        </div>
        <div>
          <div>ORDER</div>
          <div>{topMap && topMap.order}</div>
          <div>
            <icons.Iconorder />
          </div>
        </div>
        <div>
          <div>EARNING</div>
          <div>{topMap && topMap.earnings}</div>
          <div>
            <icons.Icondola />
          </div>
        </div>
        <div>
          <div>BALANCE</div>
          <div>{topMap && topMap.balance}</div>
          <div>
            <icons.Iconkhauhao />
          </div>
        </div>
      </div>
      <div className="main">
        <div>
          <h2>Latest Transaction</h2>
        </div>
        <table>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>User</th>
            <th>Hotel</th>
            <th>Room</th>
            <th>Date</th>
            <th>Price</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
          {list &&
            list.map((z) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{z.id}</td>
                <td>{z.user}</td>
                <td>{z.hotel}</td>
                <td>{z.room}</td>
                <td>{z.date}</td>
                <td>{z.price}</td>
                <td>{z.payment}</td>
                <td>{z.status}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
