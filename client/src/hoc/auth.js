import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { auth } from "../_actions/user_actions"

export default function (SpecificComponent, option, adminRoute = null) {
	/*
  option
  1.null : 아무나 출입 가능한 페이지
  2.true : 로그인 한 유저만 출입 가능한 페이지
  3.false : 로그인 한 유저는 출입 불가능한 페이지
  */

	function AuthenticationCheck(props) {
		const dispatch = useDispatch()
		let user = useSelector((state) => state.user)

		useEffect(() => {
			dispatch(auth()).then((res) => {
				//로그인 하지 않은 상태
				if (!res.payload.isAuth) {
					if (option) {
						props.history.push("/login")
					}
				} else {
					//로그인 한 상태

					if (adminRoute && !res.payload.isAdmin) {
						props.history.push("/")
					} else {
						if (option === false) props.history.push("/")
					}
				}
			})
		}, [])

		return <SpecificComponent {...props} user={user} />
	}

	return AuthenticationCheck
}
