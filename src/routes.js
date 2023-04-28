import { Route, Routes } from "react-router-dom";
import { HomePage, Login, Profile, Signup } from "./screens";


const ScreenRoutes = () => {
  // const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />


      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />

      {/* <Route path="login" element={<Login />} />
      <Route path="forgot" element={<Forgot />} />            */}
    </Routes>
  );
};
export default ScreenRoutes;
