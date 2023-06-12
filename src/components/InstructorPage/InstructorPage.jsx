import { useEffect, useState } from "react";
import InstructorInfo from "./InstructorInfo";

const InstructorPage = () => {
    const [instructors , setInstructors]= useState([])
    useEffect(()=>{
        fetch("http://localhost:7000/users/instructor")
        .then(res => res.json())
        .then(data =>{
            setInstructors(data);
        })
    },[])
    return <div className="grid md:grid-cols-3 gap-6 pt-24 mb-10">{instructors.map(instructor => <InstructorInfo
    
    key={instructor._id}
    instructor={instructor}
    ></InstructorInfo>)}</div>;
};

export default InstructorPage;