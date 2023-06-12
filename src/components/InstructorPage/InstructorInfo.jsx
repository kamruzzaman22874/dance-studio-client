const InstructorInfo = ({ instructor }) => {
    const {image, name, email} = instructor
  console.log(instructor);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-3/4 rounded p-3" src={image} alt="instructor" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Instructor Name: {name}</h2>
        <p>Instructor Email: {email}</p>
      </div>
    </div>
  );
};

export default InstructorInfo;
