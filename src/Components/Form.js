import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
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
  // const [price, setPrice] = useState();
  const history = useNavigate();
  const saveHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/addclient", {
        clientId:clientId,
        name: cname,
        email: email,
        phone: phone,
        address: address,
        source: source,
        destination: destination,
        distance : distance,
        weight: weight,
        dispatchTime: dispatchTime,
        arrivalTime: arrivalTime,
      })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        history("/dashboard");
      });
  };
  return (
    <form>
      <div className="mb-3">
        <label  className="form-label">
          clientId
        </label>
        <input type="number" className="form-control" onChange={(e) =>{setClientId(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Name
        </label>
        <input type="text" className="form-control" onChange={(e) =>{setName(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input type="email" className="form-control" onChange={(e) =>{setEmail(e.target.value)}} />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="mb-3">
        <label  className="form-label">
          Phone
        </label>
        <input type="text" className="form-control" onChange={(e) =>{setPhone(e.target.value)}}/>
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Address
        </label>
        <input type="text" className="form-control" onChange={(e) =>{setAddress(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Source
        </label>
        <input type="text" className="form-control" onChange={(e) =>{setSource(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Destination
        </label>
        <input type="text" className="form-control" onChange={(e) =>{setDestination(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Distance(km)
        </label>
        <input type="number" className="form-control" onChange={(e) =>{setDistance(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Weight
        </label>
        <input type="number" className="form-control" onChange={(e) =>{setWeight(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Dispatch Date
        </label>
        <input type="date" name="begin" className="form-control"
        placeholder="yyyy-mm-dd" 
         onChange={(e) =>{setdispatchTime(e.target.value)}}/>
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Arrival Date
        </label>
        <input type="date" name="begin" className="form-control"
        placeholder="yyyy-mm-dd" 
         onChange={(e) =>{setArrivalTime(e.target.value)}}/>
      </div>
      {/* <div className="mb-3">
        <label  className="form-label">
          Price(Rs.)
        </label>
        <input type="number" className="form-control" onChange={(e) =>{setPrice(e.target.value)}} />
      </div> */}

      <button type="submit" className="btn btn-primary" onClick={saveHandler}>
        Save
      </button>
    </form>
  );
};
export default Form;
