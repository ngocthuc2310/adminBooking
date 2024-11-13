import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./page/Layout";
import { Dashboard } from "./page/Dashboard";
import { Hotel } from "./page/Hotel";
import { AddHotel } from "./page/addHotel";
import { Rooms } from "./page/Rooms";
import { AddRoom } from "./page/AddRoom";
import { Transaction } from "./page/Transaction";
import { User } from "./page/User";
import { UpdateHotel } from "./page/UpdateHotel";
import { UpdateRoom } from "./page/UpdateRoom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/addhotel" element={<AddHotel />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/addroom" element={<AddRoom />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/users" element={<User />} />
            <Route path="/updatehotel/:id" element={<UpdateHotel />} />
            <Route path="updateroom/:id" element={<UpdateRoom />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
