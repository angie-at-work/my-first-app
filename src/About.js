import { Helmet } from 'react-helmet-async';
import './styles/index.css';

function About() {
	return (
		<div className="main">
			<Helmet prioritizeSeoTags>
				<title>About Us | Lorem Ipsum srl</title>
				<meta name='description' content='This is the About Us Page.' />
			</Helmet>
			<div className="wrapper">
				<br/>
				<h1>About <span>Us</span></h1>
				<p>This is the About Page</p>
			</div>
		</div>
	);
}

export default About;