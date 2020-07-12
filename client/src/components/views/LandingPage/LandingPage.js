import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`

function LandingPage() {
	return (
		<Wrapper>
			<h2>Landing Page</h2>
		</Wrapper>
	)
}

export default LandingPage
