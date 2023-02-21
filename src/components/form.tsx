import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export function BasicCard() {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<h1>cotizacion</h1>
				<input
					type="email"
					className=" mb-3 form-control"
					placeholder="correo"
				/>
				<input
					type="text"
					className=" mb-3 form-control"
					placeholder="nombre"
				/>
				<input
					type="text"
					className=" mb-3 form-control"
					placeholder="empresa"
				/>
				<input
					type="tel"
					className=" mb-3 form-control"
					placeholder="telefono"
				/>
				<select className="form-select" aria-label="Default select example">
					<option selected>Selecciona tipo de programa</option>
					<option value="One">One</option>
					<option value="One">One</option>
					<option value="One">One</option>
					<option value="One">One</option>
					<option value="One">One</option>
					<option value="One">One</option>
					<option value="One">One</option>
					<option value="One">One</option>
					<option value="One">One</option>
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
			<div className="text-center">
				<h1>
					Líderes en licencias, <br /> formación y soporte <br /> en Adobe
				</h1>
				<BasicCard />
			</div>
		</section>
	);
}
