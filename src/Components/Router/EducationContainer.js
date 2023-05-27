import { useLocation } from "react-router-dom"
import { getEducation } from "./Api";

export default function EducationContainer(){
    const {state:{stdID}} = useLocation();
    console.log(stdID);
    const educationInfo = getEducation(stdID);
    
    return(
        <>
            <h3>Education Info</h3>
            <h4>{educationInfo?.school}</h4>
            <h4>{educationInfo?.address}</h4>


        </>
    )
}