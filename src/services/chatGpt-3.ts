import { Configuration, OpenAIApi } from "openai";
import { message } from "../models/sys";
import "../../";
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export let conversacion = `simula una asistente de soporte para adobe y ayudame:

Asistente: Bienvenido al soporte de Adobe. ¿En qué te puedo ayudar hoy?
Usuario:quisiera saber como puedo instalar adobe illustrator
Asistente: Estoy aquí para ayudar. Por favor, dígame si estás usando Windows o Mac para instalar Adobe Illustrator.
Usuario:estoy usando windows 
Asistente: Excelente. Para instalar Adobe Illustrator en Windows, primero debe descargar el instalador de Adobe. Puede hacerlo desde la página de descargas de Adobe. Una vez que la descarga esté completa, siga los pasos de la instalación para completar la instalación.
Usuario:Muchas gracias
Asistente: De nada. ¿Hay algo más en lo que pueda ayudarte hoy?
Usuario:No, eso es todo 
Asistente: ¡Genial! Si necesita ayuda adicional, no dude en contactarnos de nuevo. ¡Gracias por contactarnos hoy!
Usuario:hola
Asistente: Bienvenido al soporte de Adobe. ¿En qué te puedo ayudar hoy?
Usuario:El instalador me genera errores

Asistente: Entiendo. Estoy aquí para ayudar. Por favor, dígame qué tipo de errores está recibiendo exactamente para que podamos ayudarlo mejor.
Usuario:me dice que error de instalacion, no encontro el instalador

Asistente: Entiendo. A veces, las descargas se pueden interrumpir antes de completarse. Por favor, intente descargar de nuevo el instalador desde la página de descargas de Adobe. Si todavía recibe el mismo error, contáctenos de nuevo para obtener una asistencia adicional.
Usuario:gracias

Asistente: De nada. ¿Hay algo más en lo que pueda ayudarte hoy?
Usuario:no 
Asistente: ¡Genial! Si necesita ayuda adicional, no dude en contactarnos de nuevo. ¡Gracias por contactarnos hoy!
Usuario:hola

Asistente: Bienvenido de nuevo al soporte de Adobe. ¿En qué te puedo ayudar hoy?
`;
export default async function init(req: any, res?: any) {
	if (!configuration.apiKey) {
		res.status(500).json({
			error: {
				message: "OpenAI API key not configured, please follow instructions in README.md",
			},
		});
		return;
	}

	const animal = req.animal || "";
	if (animal.trim().length === 0) {
		res.status(400).json({
			error: {
				message: "Please enter a valid animal",
			},
		});
		return;
	}

	try {
		const completion = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: generatePrompt(animal),
			temperature: 0.7,
			max_tokens: 2000,
		});
		res.status(200).json({ result: completion.data.choices[0].text });
	} catch (error: any) {
		// Consider adjusting the error handling logic for your use case
		if (error.response) {
			console.error(error.response.status, error.response.data);
			res.status(error.response.status).json(error.response.data);
		} else {
			console.error(`Error with OpenAI API request: ${error.message}`);
			res.status(500).json({
				error: {
					message: "An error occurred during your request.",
				},
			});
		}
	}
}

function generatePrompt(animal: string) {
	const sendResp = ` ${conversacion}
Usuario: ${animal}
Asistente:`;
	conversation(sendResp);
	return sendResp;
}

export function conversation(text: string = "") {
	conversacion = conversacion + text;
	return conversacion;
}
export function generateChat() {
	const array: message[] = [];
	const messageList = conversacion.split("\n");
	messageList.forEach((message) => {
		if (message.includes("Asistente:")) {
			array.push({ message, isAsistente: true });
		} else {
			array.push({ message, isAsistente: false });
		}
	});
	return array.map((p) => {
		if (p.message.includes("Asistente:")) {
			p.message = p.message.replace("Asistente:", "");
		} else {
			p.message = p.message.replace("Usuario:", "");
		}
		return p;
	});
}
