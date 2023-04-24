import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/home";
import Profile from "./screens/profile";

const ScreenRoutes = () => {
  // const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />

      {/* <Route path="login" element={<Login />} />
      <Route path="forgot" element={<Forgot />} />            */}
    </Routes>
  );
};
export default ScreenRoutes;
