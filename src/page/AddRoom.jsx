import { useRef } from "react";
import "./style/styleAddRoom.css";
import { addroom } from "../linkAPI/linkAPI";

//=========== component AddRoom ===========================================
export function AddRoom() {
  const refTitle = useRef("");
  const refPrice = useRef("");
  const refDes = useRef("");
  const refMax = useRef("");
  const refRooms = useRef("");

  function submitInput() {
    const rN = refRooms.current.value.split(",").map((x) => {
      return x.trim();
    });
    console.log(rN);
    const obj = {
      title: refTitle.current.value,
      price: Number(refPrice.current.value),
      maxPeople: Number(refMax.current.value),
      desc: refDes.current.value,
      roomNumbers: rN,
    };
    fetch(addroom, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((x) => x.json())
      .then((y) => {
        alert(y.msg);
      })
      .catch((er) => alert(er.message));
  }

  return (
    <div className="addhotel">
      <div className="header">Add New Room</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitInput();
        }}
      >
        <div className="form">
          <div>
            <label htmlFor="">Title</label>
            <input type="text" ref={refTitle} required />
            <label htmlFor="">Price</label>
            <input type="text" ref={refPrice} required />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <input type="text" ref={refDes} required />
            <label htmlFor="">Max People</label>
            <input type="text" ref={refMax} required />
          </div>
        </div>
        <div className="button">
          <div>
            <label htmlFor="">Rooms</label>
            <textarea ref={refRooms} required></textarea>
          </div>
          <div>
            <label htmlFor="">Chose a hotel</label>
            <select name="" id="">
              <option value="">ttt</option>
              <option value="">ttt</option>
              <option value="">ttt</option>
            </select>
          </div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
