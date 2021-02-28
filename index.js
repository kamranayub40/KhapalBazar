import React from 'react'
import AuthProvider from '../config/Auth'
import Routes from '../config/routes'
const provider=()=>{
    return(
        <AuthProvider>

            <Routes/>
        </AuthProvider>
    )
}
export default provider