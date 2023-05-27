import { Link, Outlet, useParams } from "react-router-dom";
import { getFurtherInfo } from "./Api";


export default function StudentContainer(){
    const {stdID} = useParams();
    const furtherInfo = getFurtherInfo(stdID);

    return(
        <>
            <h1>Further Info:</h1>
            <h2>Name: {furtherInfo.name}</h2>
            <h2>City: {furtherInfo.city}</h2>
            <h2>Country: {furtherInfo.country}</h2>
            <h2><Link to='education' state={{stdID}}>more...</Link></h2>
            <Outlet/>
        </>
    )    
}