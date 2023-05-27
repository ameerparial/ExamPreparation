import { Link, Outlet } from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    <li>
                        <Link to='/students'>Students</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/form'>Form</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}