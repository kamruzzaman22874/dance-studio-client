import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["admin-approved"],
    queryFn: async () => {
      const res = await axiosSecure("/classes");
      return res.data;
    },
  });

  axiosSecure.get("/classes").then((data) => {
    refetch();
    if (data.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });

  const handleApproveStatus = (item) => {
    axiosSecure.patch(`/classes/approve/${item._id}`).then((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "approve done",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  const handleDenyStatus = (item) => {
    axiosSecure.patch(`/classes/deny/${item._id}`).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "deny success",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div className="py-24 ">
      <h2 className="font-mono text-xl">
        <span className="border-b-4 border-b-[#090580]">Manage</span> Classes
      </h2>
      <div className=" shadow-lg py-6 rounded gap-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-slate-900 text-white text-lg font-semibold">
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th className="flex justify-center">Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="overflow-x-hidden">
            {/* row 1 */}
            {classes.map((item, idx) => (
              <>
                <tr>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask rounded w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.classesName}</td>
                  <td>{item.instructorName}</td>
                  <td>{item.instructorEmail}</td>
                  <td className="text-center">{item.availableSeats}</td>
                  <td>{item.price}</td>
                  <td className="flex items-center mt-3 gap-2">
                    <button className="btn btn-xs">
                      {item.status == "approved"
                        ? "approved"
                        : item.status == "denied"
                        ? "denied"
                        : "pending"}
                    </button>
                  </td>
                  <th>
                    <button
                      disabled={item?.status}
                      onClick={() => handleApproveStatus(item)}
                      className="btn btn-ghost btn-xs bg-blue-800 text-white">
                      Approve
                    </button>
                    <button
                      className="btn btn-ghost btn-xs w-full my-2"
                      onClick={() => handleDenyStatus(item)}
                      disabled={item?.status}>
                      Deny
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
