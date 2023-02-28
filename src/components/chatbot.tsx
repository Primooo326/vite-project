import botci from "../assets/bot.png";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { generateChat } from "../services/chatGpt-3";
import init from "../services/chatGpt-3";
import { message } from "../models/sys";
// let [text, setText] = useState("");
// const [result, setResult] = useState("");

// async function onSubmit(event: any) {
// 	event.preventDefault();
// 	try {
// 		const response = await fetch("../services/chatGpt-3.ts", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({ animal: text }),
// 		});

// 		const data = await response.json();
// 		if (response.status !== 200) {
// 			throw data.error || new Error(`Request failed with status ${response.status}`);
// 		}
// 		console.log(data.result);
// 		setConversation(data.result);
// 		setResult(data.result);
// 		setText("");
// 	} catch (error: any) {
// 		// Consider implementing your own error handling logic here
// 		console.error(error);
// 		alert(error.message);
// 	}
// }

function Message(props: any) {
	console.log(props);
	return (
		<div id="message" className={props.bot === true ? "messageBot" : "messageUser"}>
			<p>{props.message}</p>
		</div>
	);
}

export function Chatbot() {
	const [chat, setChat] = useState(false);
	const [userMessage, setUserMessage] = useState<message[]>([]);

	useEffect(() => {
		setUserMessage(generateChat());
	}, []);

	if (chat) {
		return (
			<div id="chat">
				<div className="chat-header">
					<img src={botci} alt="botsito" />
					<h3>soporte</h3>
					<div>
						<i className="fi fi-br-cross" />
					</div>
				</div>
				<div className="chat-body">
					{userMessage.map((msm) => {
						return <Message message={msm.message} bot={msm.isAsistente} />;
					})}
				</div>
				<div className="chat-footer">
					<textarea name="" id="inputTextarea" cols={3} rows={2} />
					<Button
						onClick={() => {
							const currentMessage: any = document.getElementById("inputTextarea");
							init({ animal: currentMessage.value });
							console.log(currentMessage.value);
						}}
						variant="contained"
					>
						<i className="fi fi-br-paper-plane" />
					</Button>
				</div>
			</div>
		);
	} else {
		return (
			// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
			<div role="button" onClick={() => setChat(!chat)} id="chatbot">
				<img src={botci} alt="botsito" />
				<h1>botsito</h1>
			</div>
		);
	}
}
