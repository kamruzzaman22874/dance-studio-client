
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import useInstructor from '../hook/useInstructor';
import Loader from '../components/Loader/Loader';

const InstructorProtector = ({children}) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();

  if (loading || isInstructorLoading) {
    return <Loader />;
  }
  if (user && isInstructor) {
    return children;
  }
  return <Navigate to={"/"} replace />;
};

export default InstructorProtector;