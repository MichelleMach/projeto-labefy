import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUrl } from '../../config/Spotify'
import { goToLogin } from '../../router/coordinator'
import * as C from "./styled"

function Login() {
    const navigate = useNavigate()

    return (
        <C.Login className="login">
            <C.Image
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Logo-Image-Spotify"
            />
            <C.Link onClick={() => goToLogin(navigate)}> LOGIN COM SPOTIFY </C.Link>
        </C.Login>
    )
}

export default Login