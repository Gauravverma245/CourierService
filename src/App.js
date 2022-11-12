import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Update from "./Components/Update";
import Form from "./Components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/dashboard" element={<Dashboard/>}></Route>
          <Route exact path="/update" element={<Update/>}></Route>
          <Route exact path="/form" element={<Form/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
