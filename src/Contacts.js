import { Helmet } from 'react-helmet-async';
import './styles/index.css';

function Contacts() {
	return (
		<div className="main">
			<Helmet prioritizeSeoTags>
				<title>Contact Us | Lorem Ipsum srl</title>
				<meta name='description' content='This is the Contacts Page.' />
			</Helmet>
			<div className="wrapper">
				<br/>
				<h1><span>Contact</span> ways</h1>
				<p>This is the Contacts Page</p>
			</div>
		</div>
	);
}

export default Contacts;