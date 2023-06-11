import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserNavbar = () => {

    return (
        <div>
            <h2 className="flex items-center gap-2 text-md font-mono mb-3"> <FaHome/> Users Home</h2>
            <li>
                <div className='bg-[#116A7B] mb-2 px-4 py-2 text-center rounded hover:bg-[#090580] border-b-4 border-b-[#090580] hover:border-b-orange-400'>
                    <Link to="/selectclass">
                    My Selected Classes
                 </Link>
                </div>
                 <br />
                <div className='bg-[#116A7B] mb-2 px-4 py-2 text-center rounded hover:bg-[#090580] border-b-4 border-b-[#090580] hover:border-b-orange-400'>
                      <Link to="/enrollclass">
                    My Enrolled Classes
                 </Link>
                </div>
            </li>
        </div>
    );
};

export default UserNavbar;