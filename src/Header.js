import logo from './images/logo.svg';
//import './styles/Header.css';

function Header() {
	return (
		<header className="App-header">
			<div className="wrapper">
				<a href="/"><img src={logo} className="logo" alt="logo" /></a>
				<nav>
					<ul id="menu">
						<li>
							<a href="/about">About us</a>
						</li>
						<li>
							<a href="/gallery">Gallery</a>
						</li>
						<li>
							<a href="/contacts">Contacts</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
