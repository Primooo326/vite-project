import { Configuration, OpenAIApi } from "openai";
import { message } from "../models/sys";
const configuration = new Configuration({
	apiKey: "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",
});
const openai = new OpenAIApi(configuration);
export let conversacion = `simula una asistente de soporte para adobe y ayudame:

Asistente: Bienvenido al soporte de Adobe. ¿En qué te puedo ayudar hoy?
Usuario:quisiera saber como puedo instalar adobe illustrator
Asistente: Por supuesto. Para instalar Adobe Illustrator, primero debe descargar el programa desde la página web de Adobe. Una vez descargado, siga las instrucciones de la pantalla para completar la instalación. Si tiene alguna pregunta durante el proceso, no dude en contactarnos. ¿Hay algo más en lo que pueda ayudarte?
Usuario:no, creo que eso es todo, gracias
Asistente: ¡De nada! Si necesitas ayuda adicional con Adobe Illustrator, no dudes en contactarnos. ¡Que tengas un buen día!
Usuario:Hola
Asistente:Bienvenido al soporte de Adobe. ¿En qué te puedo ayudar hoy?
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
		conversation(completion.data.choices[0].text);
		return { result: completion.data.choices[0].text };
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
	const sendResp = `
Usuario: ${animal}
Asistente:`;
	conversation(sendResp);
	return sendResp;
}

export function conversation(text: string = "") {
	console.log(text);
	conversacion = `${conversacion}${text}`;
	return conversacion;
}
export function generateChat() {
	let array: message[] = [];
	const messageList = conversacion.split("\n");
	messageList.forEach((message) => {
		if (message.includes("Asistente:")) {
			array.push({ message, isAsistente: true });
		} else {
			array.push({ message, isAsistente: false });
		}
	});
	array = array.map((p) => {
		if (p.message.includes("Asistente:")) {
			p.message = p.message.replace("Asistente:", "");
		} else {
			p.message = p.message.replace("Usuario:", "");
		}
		return p;
	});
	array = array.filter((p) => {
		return p.message.length > 0;
	});
	return array.filter((a, index) => {
		if (index >= 7) {
			console.log(a);
			return a;
		}
	});
}
