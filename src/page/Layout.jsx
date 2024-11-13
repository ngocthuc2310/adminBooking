import "./style/styleLayout.css";
import { Link, Outlet } from "react-router-dom";
const icons = require("../icon/icon.jsx");

//============ component Layout trang ==================================
export function Layout() {
  return (
    <div className="admin">
      <div className="logo">
        <h3>Admin Page</h3>
      </div>
      <div className="tt"></div>
      <div className="menu">
        <h5>MAIN</h5>
        <Link to={"/"}>
          <icons.Icondashboard />
          Dashboard
        </Link>
        <span>LIST</span>
        <Link to={"/users"}>
          <icons.Iconuser />
          User
        </Link>
        <Link to={"/hotel"}>
          <icons.Iconhotel />
          Hotels
        </Link>
        <Link to={"/rooms"}>
          <icons.Iconroom />
          Rooms
        </Link>
        <Link to={"/transaction"}>
          <icons.Icontransaction />
          Transactions
        </Link>
        <span>NEW</span>
        <Link to={"/addhotel"}>
          <icons.Iconhotel />
          New Hotel
        </Link>
        <Link to={"/addroom"}>
          <icons.Iconroom />
          New Room
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
