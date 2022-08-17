// import { RestorePageOutlined } from '@mui/icons-material'
// import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignUp } from '../../router/coordinator'
import LogoLogin from "../../assets/logo-spotify-icon.png";
import * as C from './styled'
import { TextField } from "@material-ui/core";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const OnChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const OnChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const OnSubmitLogin = (event) => {
        event.preventDefault()
        const body = {
            email: email,
            password: password
        };

        // axios.post("/login", body)
        // .then((response) => {
        //   localStorage.setItem('token', response.data.token)
        //   navigate("/restaurantes")
        //   if (response.data.user.hasAddress === true) {
        //     navigate("/restaurantes")} else {navigate("/signup")}
        //     }).catch((erro) => {
        //   console.log(erro.message)
        //   alert("Usuário incorreto ou não exite!!")
        // })
    }

    return (
        <C.ScreenContainer>
            <C.ImgLogin src={LogoLogin} />
            
            <form onSubmit={OnSubmitLogin}>
                <C.FormContainer>
                    <TextField
                        value={email}
                        onChange={OnChangeEmail}
                        type='email'
                        label={"Email"}
                        variant={"outlined"}
                        margin={"normal"}
                        placeholder={"email@email.com"} />

                    <TextField
                        value={password}
                        onChange={OnChangePassword}
                        type='password'
                        label={"Senha"}
                        variant={"outlined"}
                        margin={"normal"}
                        placeholder={"Minimo 6 caracteres"}
                    />
                    <C.LoginButton> Entrar </C.LoginButton>
                </C.FormContainer>
            </form>

            <C.NewContainer>
                <h4> Não Possui cadastro?</h4>
                <C.ButtonNew onClick={() => goToSignUp(navigate)} > Clique Aqui</C.ButtonNew>
            </C.NewContainer>


        </C.ScreenContainer>

    )
}

export default Login