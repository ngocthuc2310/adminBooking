import "./styleIcon.css";

const user = require("./icon/User.png");
const dashboard = require("./icon/DashBoard.png");
const exit = require("./icon/exit.png");
const hotel = require("./icon/hotel.png");
const room = require("./icon/room.png");
const transaction = require("./icon/transaction.png");
const dola = require("./icon/dola.png");
const users = require("./icon/users.png");
const khauhao = require("./icon/khauhao.png");
const order = require("./icon/order.png");

export function Iconuser() {
  return <img src={user} className="icon" />;
}
export function Icondashboard() {
  return <img src={dashboard} className="icon" />;
}
export function Iconexit() {
  return <img src={exit} className="icon" />;
}
export function Iconhotel() {
  return <img src={hotel} className="icon" />;
}
export function Iconroom() {
  return <img src={room} className="icon" />;
}
export function Icontransaction() {
  return <img src={transaction} className="icon" />;
}
export function Icondola() {
  return <img src={dola} className="icon1" />;
}
export function Iconusers() {
  return <img src={users} className="icon1" />;
}
export function Iconkhauhao() {
  return <img src={khauhao} className="icon1" />;
}
export function Iconorder() {
  return <img src={order} className="icon1" />;
}
