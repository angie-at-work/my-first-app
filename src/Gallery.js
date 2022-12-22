import { Helmet } from 'react-helmet-async';
import './styles/index.css';

function Gallery() {
	return (
		<div className="main">
			<Helmet prioritizeSeoTags>
				<title>Gallery | Lorem Ipsum srl</title>
				<meta name='description' content='This is the Gallery Page.' />
			</Helmet>
			<div className="wrapper">
				<br/>
				<h1><span>Gallery</span></h1>
				<p>This is the Gallery Page</p>
			</div>
		</div>
	);
}

export default Gallery;