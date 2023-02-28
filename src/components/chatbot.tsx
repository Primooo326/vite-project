import botci from "../assets/bot.png";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { generateChat } from "../services/chatGpt-3";
import init from "../services/chatGpt-3";
import { message } from "../models/sys";
import load from "../assets/loading.png";

function Message(props: any) {
	return (
		<div id="message" className={props.bot === true ? "messageBot" : "messageUser"}>
			<p>{props.message}</p>
		</div>
	);
}

export function Chatbot() {
	const [chat, setChat] = useState(false);
	const [userMessage, setUserMessage] = useState<message[]>([]);
	let [showLoad, setShowLoad] = useState(false);
	useEffect(() => {
		setUserMessage(generateChat());
		console.log(userMessage.length);
	}, []);

	if (chat) {
		return (
			<div id="chat">
				<div className="chat-header">
					<img src={botci} alt="botsito" />
					<h3>soporte</h3>
					{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div role="button" onClick={() => setChat(!chat)}>
						<i className="fi fi-br-cross" />
					</div>
				</div>
				<div className="chat-body" id="chat-body">
					{userMessage.map((msm) => {
						return <Message message={msm.message} bot={msm.isAsistente} />;
					})}
				</div>
				<div className="chat-footer">
					<textarea name="" id="inputTextarea" cols={3} rows={2} />
					<Button
						disabled={false}
						onClick={async () => {
							const currentMessage: any = document.getElementById("inputTextarea");
							setShowLoad(true);
							await init({ animal: currentMessage.value }).then(() => {
								setUserMessage(generateChat());
							});
							setShowLoad(false);
							currentMessage.value = "";
							setTimeout(() => {
								scroll();
							}, 100);
						}}
						variant="contained"
					>
						<i hidden={showLoad} className="fi fi-br-paper-plane" />
						<img hidden={!showLoad} src={load} alt="loader" id="loaderImg" />
					</Button>
				</div>
			</div>
		);
	} else {
		return (
			// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
			<div role="button" onClick={() => setChat(!chat)} id="chatbot">
				<img src={botci} alt="botsito" />
				<h4>IAssitant</h4>
			</div>
		);
	}
}
function scroll() {
	const chatBody = document.getElementById("chat-body") as HTMLDivElement;
	chatBody.scrollTop = chatBody.scrollHeight;
	console.log(chatBody.scrollHeight);
}

function validateForm(): boolean {
	const form = document.getElementById("inputTextarea") as HTMLTextAreaElement;
	if (form.value.length === 0) {
		return false;
	} else return true;
}
