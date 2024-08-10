import { Link , NavLink } from "react-router-dom";


const Navbar = () => {
    return (<>
        <ul>
            <li>
                {/* <Link to='/'>Home</Link> */}
                <NavLink to='/'>Home</NavLink> 
                {/*Navlink provides extra class attribute to link with them we can style it using active class */}
                
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>

        </ul>
    </>)

}
export default Navbar; 