import { HelmetProvider } from 'react-helmet-async';
import Header from './Header';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contacts from './Contacts';
import Footer from './Footer';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.css';

function App() {
	return (		
		<Router>
			<div className="page-wrapper">
				<HelmetProvider>
					<Header />
					<BrowserRouter basename="/my-first-app">
						<Switch>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/gallery">
								<Gallery />
							</Route>
							<Route path="/contacts">
								<Contacts />
							</Route>
							<Route exact path="/">
								<Home />
							</Route>
						</Switch>
					</BrowserRouter>
					<Footer />
				</HelmetProvider>
			</div>
		</Router>
	);
}

export default App;
