/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterUser = () => {
	return (
		<div className='User'>
			<h2>User Sinup</h2>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicName'>
					<Form.Control type='text' placeholder='Enter Name' />
				</Form.Group>
				<Form.Select aria-label='Default select example'>
					<option>Open this select menu</option>
					<option value='1'>One</option>
					<option value='2'>Two</option>
					<option value='3'>Three</option>
				</Form.Select>
				<Form.Group className='mb-3' controlId='formBasicEmaail'>
					<Form.Control type='email' placeholder='Email' />
				</Form.Group>
				<Form.Select aria-label='Default select example'>
					<option>Open this select menu</option>
					<option value='1'>One</option>
					<option value='2'>Two</option>
					<option value='3'>Three</option>
				</Form.Select>
				<Form.Group className='mb-3' controlId='formBasicEmaail'>
					<Form.Control type='mobile' placeholder='Mobile no' />
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='I agree privacy policy' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default RegisterUser;
