import { useEffect, useState } from "react";
import "./style/styleDasboard.css";
import { users } from "../linkAPI/linkAPI";

//============= component User ==========================================
export function User() {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch(users)
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
            <th>Email</th>
            <th>PassWord</th>
            <th>IsAdmin</th>
            <th>FullName</th>
            <th>PhoneNumber</th>
          </tr>
          {list &&
            list.map((z) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{z._id}</td>
                <td>{z.email}</td>
                <td>{z.passWord}</td>
                <td>{z.isAdmin.toString()}</td>
                <td>{z.fullName}</td>
                <td>{z.phoneNumber}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
