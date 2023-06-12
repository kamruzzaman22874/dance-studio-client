import { Navigate } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useAuth from "../hook/useAuth";
import Loader from "../components/Loader/Loader";


const AdminProtector = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <Loader />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/"} replace />;
};

export default AdminProtector;