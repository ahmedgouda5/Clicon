import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {
  const user = localStorage.getItem("ahmed"); 
  if (user) {
    return children; 
  } else {
    return <Navigate to="/auth/login" />; 
  }
};

export default Protect;
