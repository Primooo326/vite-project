import botci from "../assets/bot.png";
import Button from "@mui/material/Button";
import { useState } from "react";
import { setConversation } from "../services/chatGpt-3";
let hiddenChat = false;
const [animalInput, setAnimalInput] = useState("");
const [result, setResult] = useState();

async function onSubmit(event: any) {
	event.preventDefault();
	try {
		const response = await fetch("../services/chatGpt-3.ts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ animal: animalInput }),
		});

		const data = await response.json();
		if (response.status !== 200) {
			throw data.error || new Error(`Request failed with status ${response.status}`);
		}
		console.log(data.result);
		setConversation(data.result);
		setResult(data.result);
		setAnimalInput("");
	} catch (error: any) {
		// Consider implementing your own error handling logic here
		console.error(error);
		alert(error.message);
	}
}
function Message(props: any) {
	console.log(props);
	return (
		<div id="message" className={props.bot === true ? "messageBot" : "messageUser"}>
			<p>Lorem ipsum dolor sit.</p>
		</div>
	);
}

function Chat() {
	if (hiddenChat) {
		return <div />;
	} else {
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
					<Message bot={false} />
					<Message bot={true} />
				</div>
				<div className="chat-footer">
					<textarea name="" id="" cols={3} rows={2} />
					{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
					<Button variant="contained">
						<i className="fi fi-br-paper-plane" />
					</Button>
				</div>
			</div>
		);
	}
}

function ChatbotIcon() {
	if (!hiddenChat) {
		return <div />;
	} else {
		return (
			// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
			<div onClick={changeHiddenChat} id="chatbot">
				<img src={botci} alt="botsito" />
				<h1>botsito</h1>
			</div>
		);
	}
}
export function Chatbot() {
	return (
		<>
			<ChatbotIcon />
			<Chat />
		</>
	);
}
function changeHiddenChat() {
	console.log(!hiddenChat);
	return (hiddenChat = !hiddenChat);
}
