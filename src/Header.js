import logo from './images/logo.svg';
import { Link } from "react-router-dom";
//import './styles/Header.css';

function Header() {
	return (
		<header className="App-header">
			<div className="wrapper">
				<a href="/"><img src={logo} className="logo" alt="logo" /></a>
				<nav>
					<ul id="menu">
						<li>
							<Link to="/about">About us</Link>
						</li>
						<li>
							<Link to="/gallery">Gallery</Link>
						</li>
						<li>
							<Link to="/contacts">Contacts</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
