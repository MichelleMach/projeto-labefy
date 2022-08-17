import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from '../pages/login/Login'
import Tracks from '../pages/tracks/Tracks'
import Playlists from '../pages/playlists/Playlists'
import SignUp from '../pages/signUp/SignUp'
import Perfil from '../pages/perfil/Perfil'
import Inicio from '../pages/telaInicial/Inicio'
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="playlists" element={<Playlists />} />
          <Route path=":playlist/traks" element={<Tracks />} />
          <Route path="perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router