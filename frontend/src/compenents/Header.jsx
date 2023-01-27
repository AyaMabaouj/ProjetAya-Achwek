import { useRef } from "react";
import { FaBars, FaTimes,FaSignInAlt, FaSignOutAlt, FaUser,FaHome } from "react-icons/fa";
import "../Styles/main.css";
import image from '../images/img6.png'

function Header() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	
	return (
		<header>
			<img src={image} alt="image"></img>
			<nav ref={navRef}>
				<FaHome/><a href="/">Home</a>
				<FaUser /><a href="/signup">Register</a>
				<a href="/login"><button className="login"><FaSignInAlt />  Login</button></a>
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

export default Header;