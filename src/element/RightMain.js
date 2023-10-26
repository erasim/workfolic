/** @format */

import RegisterUser from "./RegisterUser";
import AgentSignup from "./AgentSignup";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const RightMain = () => {
	const [isActive, setIsActive] = useState({
		id: "divOne",
	});
	useEffect(() => {
		console.log(isActive);
	}, [isActive]);
	const hideShowDiv = (e) => {
		setIsActive({
			id: e.target.id,
		});
	};

	return (
		<div>
			<h1 style={{ margin: "44px" }}>Create an account</h1>
			<Button
				id='divOne'
				onClick={(e) => {
					hideShowDiv(e);
				}}>
				Merchent
			</Button>
			<Button
				id='divTwo'
				onClick={(e) => {
					hideShowDiv(e);
				}}>
				Agent
			</Button>
			<br />
			<br />

			<div className={isActive.id === "divOne" ? `divOne` : "divOne d-none"}>
				<RegisterUser />
			</div>
			<div className={isActive.id === "divTwo" ? `divTwo` : "divTwo d-none"}>
				<AgentSignup />
			</div>

			<div>
				<p>
					Already have an account{" "}
					<span style={{ color: "red", fontSize: "20" }}>Login</span>
				</p>
			</div>
		</div>
	);
};

export default RightMain;
