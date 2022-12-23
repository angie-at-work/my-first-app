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
					<Header />
					<HashRouter basename="/">
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/gallery" component={Gallery} />
						<Route exact path="/contacts" component={Contacts} />
					</HashRouter>
					<Footer />
				</HelmetProvider>
			</div>
	);
}

export default App;
