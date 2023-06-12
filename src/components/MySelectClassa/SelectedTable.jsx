import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedTable = ({ user, refetch }) => {
  // console.log(user);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:7000/deletedClass/${id}`).then((res) => {
          refetch();
          if (res.data.deltedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "delete successfully done",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  return (
    <>
      {
        <tr className="bg-base-200">
          <td>{user?.image}</td>
          <td>{user?.classesName}</td>
          <td>{user?.instructorName}</td>
          <td>{user?.instructorEmail}</td>
          <td>{user?.availableSeats}</td>
          <td>{user?.price}</td>
          <td>
            <Link
              to={`/dashboard/payment`} 
              state={{ enrolledClass: user }}>
              <button className=" bg-amber-500 p-2 rounded">
                Pyment
              </button>
            </Link>
          </td>
          <td>
            <button
              onClick={() => handleDelete(user._id)}
              className=" bg-rose-600 p-2 rounded">
              Delete
            </button>
          </td>
        </tr>
      }
    </>
  );
};

export default SelectedTable;
