import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import CreateEvent from "../Pages/CreateEvent";
import Login from "../Pages/LogIn";

const WebsiteRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/event" element={<CreateEvent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default WebsiteRoutes;
