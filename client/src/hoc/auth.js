import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_actions'

export default function (SpecificComponent, option, adminRoute = null) {

  /*
  option
  1.null : 아무나 출입 가능한 페이지
  2.true : 로그인 한 유저만 출입 가능한 페이지
  3.false : 로그인 한 유저는 출입 불가능한 페이지
  */

  function AuthenticationCheck(props) {

    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(auth())
        .then(res => console.log(res))
    }, [])

    return <SpecificComponent />
  }

  return AuthenticationCheck
}