import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {
	const { data: users = [], refetch } = useQuery(['users'], async () => {
		const res = await fetch('https://dance-studio-server.vercel.app/users');
		return res.json();
	});
	const handleAdmin = (_id) => {
		fetch(`https://dance-studio-server.vercel.app/users/admin/${_id}`, {
			method: 'PATCH',
		})
			.then((res) => res.json())
			.then((data) => {
				refetch();
				if (data.modifyCount > 0) {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Your work has been saved',
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	const handleInstructor = (_id) => {
		fetch(`https://dance-studio-server.vercel.app/users/instructor/${_id}`, {
			method: 'PATCH',
		})
			.then((res) => res.json())
			.then((data) => {
				refetch();
				if (data.modifyCount > 0) {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Your work has been saved',
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
    <div className="overflow-x-auto w-full">
      <h2 className="text-lg font-mono">
        {" "}
        <span className="border-b-4 border-b-[#090580]">Total</span> Users :{" "}
        {users.length}
      </h2>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>User Email</th>
            <th>Make Admin</th>
            <th>Make Instructor</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user._id}>
              <th>{idx + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {user.role === "admin" || user.role === "instructor" ? (
                <>
                  <button
                    disabled
                    onClick={() => handleAdmin(user._id)}
                    className="btn btn-xs mt-3">
                    Make Admin
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleAdmin(user._id)}
                    className="btn btn-xs bg-slate-900 mt-2 text-white">
                    Make Admin
                  </button>
                </>
              )}
              <td>
                {user.role === "admin" || user.role === "instructor" ? (
                  <>
                    <button
                      disabled
                      onClick={() => handleInstructor(user._id)}
                      className="btn btn-xs bg-slate-900 text-white">
                      Make Instructor
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleInstructor(user._id)}
                      className="btn btn-xs bg-slate-900 text-white">
                      Make Instructor
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
