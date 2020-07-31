import React, { useState } from "react"
import styled from "styled-components"
import { registerUser } from "../../../_actions/user_actions"
import { useDispatch } from "react-redux"
import { withRouter } from "react-router-dom"

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
`

function RegisterPage(props) {
	const dispatch = useDispatch()

	const [Email, setEmail] = useState("")
	const [Password, setPassword] = useState("")
	const [Name, setName] = useState("")
	const [ConfirmPassword, setConfirmPassword] = useState("")

	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value)
	}

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value)
	}

	const onNameHandler = (event) => {
		setName(event.currentTarget.value)
	}

	const onConfirmPasswordHandler = (event) => {
		setConfirmPassword(event.currentTarget.value)
	}

	const onSubmitHandler = (event) => {
		event.preventDefault()

		if (Password !== ConfirmPassword) {
			return alert("비밀번호가 일치하지 않습니다.")
		}

		let body = {
			email: Email,
			password: Password,
			name: Name,
		}

		dispatch(registerUser(body)).then((res) => {
			if (res.payload.success) {
				props.history.push("/login")
			} else {
				alert("Error")
			}
		})
	}

	return (
		<Wrapper>
			<Form onSubmit={onSubmitHandler}>
				<label>Email</label>
				<input type="email" value={Email} onChange={onEmailHandler} />
				<label>Name</label>
				<input type="text" value={Name} onChange={onNameHandler} />
				<label>Password</label>
				<input type="password" value={Password} onChange={onPasswordHandler} />
				<label>Confirm Password</label>
				<input
					type="password"
					value={ConfirmPassword}
					onChange={onConfirmPasswordHandler}
				/>
				<br />
				<button type="submit">Register</button>
			</Form>
		</Wrapper>
	)
}

export default withRouter(RegisterPage)
