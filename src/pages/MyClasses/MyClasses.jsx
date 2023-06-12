import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { FaEdit } from "react-icons/fa";
const MyClasses = () => {
  const { user } = useAuth();
  console.log(user);
  const [studentClasses, setStudentClasses] = useState([]);

  useEffect(() => {
    fetch(`https://dance-studio-server-kamruzzaman22874.vercel.app/instructorClasses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudentClasses(data);
      });
  }, [user]);
  return (
    <div className="overflow-x-auto w-full ">
      <table className="table table-xs ">
        <thead>
          <tr className="text-lg text-center font-mono">
            <th>#</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Price</th>
            <th>Available Seat</th>
            <th>Status</th>
            <th>Update</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {studentClasses.map((student, idx) => (
            <>
              <tr className="font-mono">
                <th className="text-lg text-center">{idx + 1}</th>
                <td className="text-lg text-center">{student.classesName}</td>
                <td className="text-lg text-center">
                  {student.instructorName}
                </td>
                <td className="text-lg text-center">
                  {student.instructorEmail}
                </td>
                <td className="text-lg text-center">
                  {student.availableSeats}
                </td>
                <td className="text-lg text-center">${student.price}</td>
                <td className="text-lg text-center">
                  {student?.status || "pending"}
                </td>
                <td className="text-xm text-center cursor-pointer">
                  <FaEdit className="text-xl w-1/2 mx-auto"/>
                </td>
                <td className="text-xm ">
                  {student.feedback}
                </td>
                
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
