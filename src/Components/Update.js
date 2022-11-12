import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Update =()=>{
  const [clientId, setClientId] = useState();
  const [cname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState();
  const [weight, setWeight] = useState();
  const [dispatchTime, setdispatchTime] = useState();
  const [arrivalTime, setArrivalTime] = useState();
  const [price, setPrice] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setClientId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPhone(localStorage.getItem("phone"));
    setAddress(localStorage.getItem("address"));
    setSource(localStorage.getItem("source"));
    setDestination(localStorage.getItem("destination"));
    setDistance(localStorage.getItem("distance"));
    setWeight(localStorage.getItem("weight"));
    setdispatchTime(localStorage.getItem("dispatchTime"));
    setArrivalTime(localStorage.getItem("arrivalTime"));
    setPrice(localStorage.getItem("price"));
  }, []);

  const updateHandler = (e) =>{
    e.preventDefault();
    axios
      .put("http://localhost:8080/updateclient", {
        clientId:clientId,
        name: cname,
        email: email,
        phone: phone,
        address: address,
        source: source,
        destination: destination,
        distance: distance,
        weight: weight,
        dispatchTime: dispatchTime,
        arrivalTime: arrivalTime,
        price :price
      })
      .then(() => {
        navigate("/dashboard");
      });

  }
    return(
        <>
         <form>
      <div className="mb-3">
        <label  className="form-label">
          clientId
        </label>
        <input type="number" disabled={true} className="form-control" value={clientId} onChange={(e) =>{setClientId(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Name
        </label>
        <input type="text" className="form-control" value={cname} onChange={(e) =>{setName(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input type="email" className="form-control" value={email} onChange={(e) =>{setEmail(e.target.value)}} />
        <div id="emailHelp" className="form-text">
        </div>
      </div>

      <div className="mb-3">
        <label  className="form-label">
          Phone
        </label>
        <input type="text" className="form-control" value={phone} onChange={(e) =>{setPhone(e.target.value)}}/>
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Address
        </label>
        <input type="text" className="form-control"  value={address} onChange={(e) =>{setAddress(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Source
        </label>
        <input type="text" className="form-control" value={source} onChange={(e) =>{setSource(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Destination
        </label>
        <input type="text" className="form-control" value={destination} onChange={(e) =>{setDestination(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Distance
        </label>
        <input type="number" className="form-control"value={distance} onChange={(e) =>{setDistance(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Weight
        </label>
        <input type="number" className="form-control" value={weight} onChange={(e) =>{setWeight(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Dispatch Date
        </label>
        <input type="date" className="form-control" value={dispatchTime} onChange={(e) =>{setdispatchTime(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Arrival Date
        </label>
        <input type="date" className="form-control" value={arrivalTime} onChange={(e) =>{setArrivalTime(e.target.value)}} />
      </div>
      {/* <div className="mb-3">
        <label  className="form-label">
          Price(Rs.)
        </label>
        <input type="number" className="form-control" value={price} onChange={(e) =>{setPrice(e.target.value)}} />
      </div> */}

      <button type="submit" className="btn btn-primary" onClick={updateHandler}>
        Update
      </button>
    </form></>
    );
}
export default Update;