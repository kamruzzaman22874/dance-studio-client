const MyClass = ({ student }) => {
 
  console.log(student);
  const { image, classesName, instructorName, availableSeats, price } = student;
  return (
    <div className="w-full h-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72  dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-3">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">
            Class Name: {classesName}
          </h2>
          <p className="dark:text-gray-100">
            Instructor Name: {instructorName}
          </p>
          <p className="dark:text-gray-100">
            Available Seats: {availableSeats}
          </p>
          <p className="dark:text-gray-100">Price: ${price}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full bg-slate-900 hover:bg-orange-300 hover:text-black border-b-4 border-b-orange-500 text-white p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default MyClass;
