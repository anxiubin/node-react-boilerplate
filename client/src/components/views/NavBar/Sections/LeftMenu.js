import React from "react"
import { Menu } from "antd"

function LeftMenu(props) {
	return (
		<Menu mode={props.mode}>
			<Menu.Item key="Home">
				<a href="/">Home</a>
			</Menu.Item>
		</Menu>
	)
}

export default LeftMenu
