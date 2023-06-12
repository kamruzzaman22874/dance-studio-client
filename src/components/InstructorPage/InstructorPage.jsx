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
    return <div>{instructors.map(instructor => <InstructorInfo
    
    key={instructor._id}
    instructor={instructor}
    ></InstructorInfo>)}</div>;
};

export default InstructorPage;