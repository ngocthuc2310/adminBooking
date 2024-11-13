import { useEffect, useState } from "react";
import "./style/styleDasboard.css";
import { listTransaction } from "../linkAPI/linkAPI";

//=========== component Transaction ======================================
export function Transaction() {
  const [list, setList] = useState(null);

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
