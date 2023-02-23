export function CardProduct(props: { img: string; text: string }) {
	return (
		<div className="cardProduct">
			<div className="cardProduct__img">
				<img src={props.img} alt="" />
			</div>
			<div className="cardProduct__content">
				<p>{props.text}</p>
			</div>
		</div>
	);
}

export function Products() {
	return (
		<section id="productsSeccion" className="text-center">
			<h4>
				En CYMETRIA Group S.A.S. somos distribuidores autorizados de Adobe en Colombia, te ofrecemos soporte técnico
				avanzado, capacitación certificada, asesoría gratuita y consultoría personalizada según tu necesidad.
			</h4>
			<h4>¡Adobe tiene todo lo que necesitas para inspirar, transformar e impulsar tu empresa hacia delante!</h4>
			<div className="cardsProducts">
				<CardProduct
					img={"https://www.licenciasadobe.com/licencias_adobe_creative_cloud.jpg"}
					text="Lleva tus ideas hasta el infinito y mas allá con la suite de productos gráficos Adobe Creative Cloud."
				/>
				<CardProduct
					img={"https://www.licenciasadobe.com/licencias_adobe_document_cloud_sign.jpg"}
					text="Crea y edita documentos desde cualquier lugar, gestiona firmas digitales en la nube y elimina definitivamente los procesos manuales."
				/>
				<CardProduct
					img={"https://www.licenciasadobe.com/licencias_adobe_substance_3D_metaverso.jpg"}
					text="Descrube los nuevos productos 3D que Adobe tiene para el metaverso."
				/>
				<CardProduct
					img={"https://www.licenciasadobe.com/licencias_adobe_magento_commerce.jpg"}
					text="Adobe Commerce es la plataforma de comercio electrónico flexible, ampliable y escalable que permite a empresas y negocios vender y expandir sus productos en Internet."
				/>
				<CardProduct
					img={"https://www.licenciasadobe.com/licencias_adobe_formacion.jpg"}
					text="Formamos tus equipos de trabajo en la suite de Adobe. ¡Somos Adobe Authorized Training Center!"
				/>
				<CardProduct
					img={"https://www.licenciasadobe.com/soporte_tecnico_adobe.jpg"}
					text="Brindamos el soporte técnico necesario para apropiar las diferentes herramientas de Adobe de acuerdo a las necesidades de su empresa o negocio."
				/>
			</div>
		</section>
	);
}
