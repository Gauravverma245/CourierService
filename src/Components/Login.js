import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useNavigate();
  const submitHandler= (e) =>{
    e.preventDefault();
    console.log(email);
    console.log(password);
    axios.post("http://localhost:8080/login",{
        email: email,
        password: password
      }).then((res) =>{
        console.log(res);
        console.log(res.data);
        if(res.data === ""){
          toast("Please enter valid email or password");
          console.log("please enter valid email");
        }
        else{
          history("/dashboard");
        }
      })
  }
  
  return (
    <>
      <form className="form-control">
        <div className="mb-3">
          <label>
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) =>{setemail(e.target.value)}}
            
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) =>{setpassword(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitHandler}>
          Submit
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </>
  );
};
export default Login;
