import { HelmetProvider } from 'react-helmet-async';
import Header from './Header';
import logo from './images/logo.svg';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contacts from './Contacts';
import Footer from './Footer';
import { HashRouter, Route, Link } from "react-router-dom";
import './styles/index.css';

function App() {
	return (		
			<div className="page-wrapper">
				<HelmetProvider>
					<HashRouter basename="/">
						{/* <Header /> */}
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
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/gallery" component={Gallery} />
						<Route exact path="/contacts" component={Contacts} />
						<Footer />
					</HashRouter>
				</HelmetProvider>
			</div>
	);
}

export default App;
