import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Axios from "axios"
import { withRouter } from "react-router-dom"

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`

function LandingPage(props) {
	const isAuthUser = useSelector((state) => state.user.userData?.isAuth)

	const onClickHandler = () => {
		Axios.get("/api/users/logout").then((res) => {
			if (res.data.success) {
				props.history.push("./login")
			} else {
				alert("로그아웃에 실패했습니다.")
			}
		})
	}
	return (
		<Wrapper>
			<h2>Landing Page</h2>
			{isAuthUser && <button onClick={onClickHandler}>Logout</button>}
		</Wrapper>
	)
}

export default withRouter(LandingPage)
