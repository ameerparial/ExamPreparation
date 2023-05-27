import { Link, Outlet } from "react-router-dom";
import { getStudents } from "./Api"
import './students.css';

export default function Students(){
    const students = getStudents();
    
    return(
        <>
            <div className="students">
                {students.map((std, index)=>(
                    <div key={index} className="element">
                        <Link to={std.id}>{std.name}</Link>
                    </div>
                    ))
                }
            </div>

            <Outlet/>

        </>

    ) 

}