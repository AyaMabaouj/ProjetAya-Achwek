import { useRef } from "react";
import { FaBars, FaTimes,FaSignInAlt, FaSignOutAlt, FaUser,FaHome } from "react-icons/fa";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import image from '../images/img6.png'

function NavBar() {
	const navigate = useNavigate();
	const [cookies, setCookie, removeCookie] = useCookies([]);
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	const logOut = () => {
		removeCookie("jwt");
		navigate("/login");
		localStorage.clear()
	  };
	return (
		<header>
			<img src={image} alt="image"></img>
			<nav ref={navRef}>
				<FaHome/><a href="/">Home</a>
				<button onClick={logOut}><FaSignOutAlt />  Log out</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default NavBar;