import logo from './images/logo.svg';
import { HashRouter, Link } from "react-router-dom";
//import './styles/Header.css';

function Header() {
	return (
		<HashRouter basename="/">
			<header className="App-header">
				<div className="wrapper">
					<Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
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
		</HashRouter>
	);
}

export default Header;
