import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export function InputForm({ handler, touched, hasError, meta }: any) {}

export function BasicCard() {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<h1>cotizacion</h1>
				<input type="email" className=" mb-3 form-control" placeholder="correo" />
				<input type="text" className=" mb-3 form-control" placeholder="nombre" />
				<input type="text" className=" mb-3 form-control" placeholder="empresa" />
				<input type="tel" className=" mb-3 form-control" placeholder="telefono" />
				<select className="form-select" aria-label="Default select example">
					<option selected>Selecciona tipo de programa</option>
					<option value="Adobe Creative Cloud">Adobe Creative Cloud</option>
					<option value="Adobe Document Cloud">Adobe Document Cloud</option>
					<option value="Adobe Substance 3D y Metaverso">Adobe Substance 3D y Metaverso</option>
					<option value="Adobe Commerce">Adobe Commerce</option>
					<option value="Adobe Acrobat Sign">Adobe Acrobat Sign</option>
					<option value="Adobe Acrobat">Adobe Acrobat</option>
					<option value="Entrenamiento Oficial Adobe">Entrenamiento Oficial Adobe</option>
					<option value="Soporte Tecnico Adobe">Soporte Tecnico Adobe</option>
					<option value="Otro">Otro</option>
				</select>
			</CardContent>
			<CardActions className="justify-content-center">
				<Button style={{ width: "90%" }} variant="contained">
					Cotizar
				</Button>
			</CardActions>
		</Card>
	);
}

export function FormComponent() {
	return (
		<section id="firstSection">
			<div className=" text-center formDiv ">
				<h1>
					Líderes en licencias, <br /> formación y soporte <br /> en Adobe
				</h1>
				<BasicCard />
			</div>
		</section>
	);
}
