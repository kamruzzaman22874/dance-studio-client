import { useEffect, useState } from "react";
import ClassPage from "./ClassPage";

const ClassesPage = () => {
    const [classes, setClasses] = useState([]);
	useEffect(() => {
	fetch(`http://localhost:7000/instructorStatus/approved`)
    .then((res) => res.json())
    .then((data) => {
      setClasses(data);
    });
	}, []);
    return (
        <div className='grid md:grid-cols-3 gap-6 px-12'>
			{classes.map((item) => (
				<ClassPage key={item._id} item={item}></ClassPage>
			))}
		</div>
    );
};

export default ClassesPage;