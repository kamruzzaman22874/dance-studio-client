import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const SocialLink = () => {
    const { googleSignIn } = useAuth()
		const navigate = useNavigate();
		const location = useLocation();
		const from = location?.state?.from?.pathname || '/';
    return (
        <div>
            
        </div>
    );
};

export default SocialLink;