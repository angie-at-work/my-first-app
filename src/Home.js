import { Helmet } from 'react-helmet-async';
import './styles/index.css';

function Home() {
	return (
		<div className="main">
			<Helmet prioritizeSeoTags>
				<title>Home Page | Lorem Ipsum srl</title>
				<meta name='description' content='This is the description of the home page.' />
			</Helmet>
			<div className="wrapper">
				<br/>
				<h1><span>Home</span> page title</h1>
				<p>This is the home page.</p>
			</div>
		</div>
	);
}

export default Home;