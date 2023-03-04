import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../module/Home";
import AddUser from "../module/user/AddUser";

function MyRoute(props) {
  return (
    <>
    {props.val} hello
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
        
                <Route path="/user" element={<AddUser />} />
             
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default MyRoute;
