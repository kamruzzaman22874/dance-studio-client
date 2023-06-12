import axios from "axios";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ClassPage = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate()
  const { image, classesName, instructorName, availableSeats, price } = item;
  const handleSelect = (item) => {
    const { _id, classesName, instructorName, availableSeats, price ,instructorEmail} = item;
    const newData = {
      selectedId: _id,
      classesName,
      instructorName,
      instructorEmail,
      availableSeats,
      price,
      image,
    };
    if(!user){
      return navigate("/login")
    }
    axios
      .post(`https://dance-studio-server-kamruzzaman22874.vercel.app/selectedClassData`, newData)
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booking successfully done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mt-24 font-serif">
      <img
        src={image}
        alt=""
        className="object-cover object-center rounded w-full h-72 dark:bg-gray-500"
      />
      <div className="p-3">
        <div className="space-y-2">
          <h1>Classes Name: {classesName}</h1>
          <h2>Instructor Name: {instructorName}</h2>
          <div className="flex justify-between mb-3">
            <h2>Available Seat: {availableSeats}</h2>
            <h2>Price: ${price}</h2>
          </div>
        </div>
        <span className="mt-4">
          <input
            onClick={() => handleSelect(item)}
            className="border-b-2 bg-[#2B2A4C] hover:border-b-[#090580] hover:bg-orange-400 text-white cursor-pointer px-4 py-2 rounded"
            type="submit"
            value="Select"
          />
        </span>
      </div>
    </div>
  );
};

export default ClassPage;
