import React from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
    accessToken: boolean,
    children: React.ReactNode
}

const Privaterouter = ({accessToken, children}: Props) => {
  return (
    (accessToken)?<>{children}</>:Navigate({to:'/'})
  )
}

export default Privaterouter
