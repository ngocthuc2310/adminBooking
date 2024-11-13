import { useEffect, useRef, useState } from "react";
import "./style/styleAddHotel.css";
import { listroom, addHotel } from "../linkAPI/linkAPI";

//=========== component AddHotel =========================================
export function AddHotel() {
  const [rooms, setRomms] = useState(null);
  const refName = useRef("");
  const refCity = useRef("");
  const refDistance = useRef("");
  const refDesc = useRef("");
  const refImage = useRef("");
  const refType = useRef("");
  const refAddress = useRef("");
  const refTitle = useRef("");
  const refPrice = useRef("");
  const refFeatured = useRef("");
  const refRooms = useRef([]);

  useEffect(() => {
    fetch(listroom)
      .then((x) => x.json())
      .then((y) => setRomms(y))
      .catch((er) => console.log(er.message));
  }, []);

  function submitInput() {
    const obj = {
      name: refName.current.value,
      type: refType.current.value,
      city: refCity.current.value,
      address: refAddress.current.value,
      cheapestPrice: refPrice.current.value,
      distance: refDistance.current.value,
      photos: [refImage.current.value],
      desc: refDesc.current.value,
      featured: refFeatured.current.value,
      rooms: [...refRooms.current.selectedOptions].map((x) => x.value),
      title: refTitle.current.value,
    };

    fetch(addHotel, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((x) => x.json())
      .then((x) => alert(x.msg))
      .catch((er) => alert(er.message));
  }

  return (
    <div className="addhotel">
      <div className="header">Add New Hotel</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitInput();
        }}
      >
        <div className="form">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" ref={refName} />
            <label htmlFor="">City</label>
            <input type="text" ref={refCity} />
            <label htmlFor="">Distance from City Center</label>
            <input type="text" ref={refDistance} />
            <label htmlFor="">Description</label>
            <input type="text" ref={refDesc} />
            <label htmlFor="">Image</label>
            <input type="text" className="image" ref={refImage} />
          </div>
          <div>
            <label htmlFor="">Type</label>
            <input type="text" ref={refType} />
            <label htmlFor="">Address</label>
            <input type="text" ref={refAddress} />
            <label htmlFor="">Title</label>
            <input type="text" ref={refTitle} />
            <label htmlFor="">Price</label>
            <input type="text" ref={refPrice} />
            <label htmlFor="">Featured</label>
            <select className="featured" ref={refFeatured}>
              <option>True</option>
              <option>False</option>
            </select>
          </div>
        </div>
        <div className="select">
          <label htmlFor="">Rooms</label>
          <select className="selectrrr" multiple name="rooms" ref={refRooms}>
            {rooms &&
              rooms.map((x) => <option value={x._id}>{x.title}</option>)}
          </select>
        </div>
        <div className="button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
