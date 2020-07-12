import React, { useState } from 'react'
import styled from 'styled-components'
import { loginUser } from '../../../_actions/user_actions'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

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

function LoginPage(props) {

	const dispatch = useDispatch()

	const [Email, setEmail] = useState("")
	const [Password, setPassword] = useState("")

	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value)
	}
	
	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value)
	}

	const onSubmitHandler = (event) => {
		event.preventDefault()

		let body = {
			email: Email,
			password: Password
		}

		dispatch(loginUser(body))
			.then(res => {
				if(res.payload.loginSuccess) {
					props.history.push('/')
				} else {
					alert('Error')
				}
			})
	}

	return (
		<Wrapper>
				
			<Form onSubmit={onSubmitHandler}>
					<label>Email</label>
					<input type="email" value={Email} onChange={onEmailHandler} />
					<label>Password</label>
					<input type="password" value={Password} onChange={onPasswordHandler} />
					<br />
					<button>Login</button>
			</Form>
				
		</Wrapper>
	)
}

export default withRouter(LoginPage)
