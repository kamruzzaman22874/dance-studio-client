import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import SelectedTable from "./SelectedTable";

const MySelectClassa = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: mySelectedClass = [],
    refetch,
    isLoading,
  } = useQuery(["mySelectedClass", user?.email], async () => {
    const res = await axiosSecure(`/selectedClass/${user?.email}`);
    
    return res.data;
  });
  console.log(mySelectedClass);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Availble Seats</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="">
            {mySelectedClass.map((user, idx) =>  <SelectedTable key={idx} refetch={refetch} user={user}></SelectedTable>)}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySelectClassa;
