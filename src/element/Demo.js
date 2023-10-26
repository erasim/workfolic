/** @format */

import React, { useState, useEffect } from "react";
function Demo() {
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
		<div className='row'>
			<h2 className='mb-5 text-center'>
				React Hide and Show Single Div Example
			</h2>
			<div className='col-4'>
				<div className='d-grid mb-4'>
					<button
						id='divOne'
						onClick={(e) => {
							hideShowDiv(e);
						}}
						className='btn btn-danger'>
						Show
					</button>
				</div>
				<div className={isActive.id === "divOne" ? `divOne` : "divOne d-none"}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
				</div>
			</div>
			<div className='col-4'>
				<div className='d-grid mb-4'>
					<button
						id='divTwo'
						onClick={(e) => {
							hideShowDiv(e);
						}}
						className='btn btn-success'>
						Show
					</button>
				</div>
				<div className={isActive.id === "divTwo" ? `divTwo` : "divTwo d-none"}>
					<p>
						Pellentesque molestie ipsum nisl, vel convallis nisl scelerisque et.
					</p>
				</div>
			</div>
			<div className='col-4'>
				<div className='d-grid mb-4'>
					<button
						id='divThree'
						onClick={(e) => {
							hideShowDiv(e);
						}}
						className='btn btn-primary'>
						Show
					</button>
				</div>
				<div
					className={isActive.id === "divThree" ? `divThree` : "divTwo d-none"}>
					<p>
						Sed suscipit, nunc et malesuada imperdiet, massa justo sollicitudin
						ligula.
					</p>
				</div>
			</div>
		</div>
	);
}
export default Demo;
