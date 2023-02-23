export function NavbarComponent() {
	const srcAdobeImg = "https://www.licenciasadobe.com/licencias-adobe.png";
	const srcCymatriaImg =
		"https://deluxe-pegasus-9507b5.netlify.app/Logos_cymetria/Logo%20horizontal%20con%20slogan.png";

	return (
		<nav className="naVbar">
			<div className="nav-items">
				<div className="adobeImgContent">
					<img className="adobeImg" src={srcAdobeImg} alt="srcAdobeImg" />
					<h2>LICENCIAS ADOBE</h2>
				</div>
				<div className="adobeImgContent">
					<img className="adobeImg" src={srcCymatriaImg} alt="srcCymatriaImg" />
				</div>
			</div>
		</nav>
	);
}
