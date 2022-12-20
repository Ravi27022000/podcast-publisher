import logo from "./logo.svg"
import "./App.css"
import Home from "./components/Home"
import Login from "./components/Login"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import Header from "./components/Header"
import AddMusic from "./components/AddMusic"
import ListMusic from "./components/ListMusic"
import Signup from "./components/Signup"
import PlayMusic from "./components/PlayMusic"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route element={<Navigate to="/login" />} path="/" />
          <Route element={<Home></Home>} path="home" />
          <Route element={<Login></Login>} path="login" />
          <Route element={<Signup />} path="register" />
          <Route element={<ListMusic />} path="listmusic" />
          <Route element={<AddMusic />} path="addmusic" />
          <Route element={<PlayMusic />} path="playmusic/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
