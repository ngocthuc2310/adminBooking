import { useEffect, useRef, useState } from "react";
import "./style/styleAddRoom.css";
import { addroom, roominfo, updateroom } from "../linkAPI/linkAPI";
import { useParams } from "react-router-dom";

//=========== component UpdateRoom ====================================
export function UpdateRoom() {
  const refTitle = useRef("");
  const refPrice = useRef("");
  const refDes = useRef("");
  const refMax = useRef("");
  const refRooms = useRef("");
  const pr = useParams();
  const [t, setT] = useState(true);

  useEffect(() => {
    fetch(roominfo + "?id=" + pr.id)
      .then((x) => x.json())
      .then((y) => {
        refTitle.current.value = y.title;
        refPrice.current.value = y.price;
        refDes.current.value = y.desc;
        refMax.current.value = y.maxPeople;
        refRooms.current.value = y.roomNumbers;
        setT((x) => !x);
      })
      .catch((er) => console.log(er.message));
  }, []);

  function submitInput() {
    const rN = refRooms.current.value.split(",").map((x) => {
      return x.trim();
    });
    const obj = {
      _id: pr.id,
      title: refTitle.current.value,
      price: Number(refPrice.current.value),
      maxPeople: Number(refMax.current.value),
      desc: refDes.current.value,
      roomNumbers: rN,
    };
    fetch(updateroom, {
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
      <div className="header">Update Room</div>
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
