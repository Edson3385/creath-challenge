import './App.css';
import { firebase, auth } from "./service/firebase";
import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Routes, Route, Link} from "react-router-dom";



export default function App() {
  return (
    <HashRouter>     
      <Routes>
        <Route path="/">
          <Route index element = {<Home />}/>
          <Route path="cadastrar" element = {<Cadastrar />}/>
          <Route path="login" element = {<Login />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

function Home(){
  <form id="Login">
    
    <div className="container">
      <h1>Login</h1>
    <label for="email"><b>E-mail</b></label>
    <input type="text" placeholder="Insira e-mail" name="email" required/>
    
    <label for="psw"><b>Senha</b></label>
    <input type="password" placeholder="Insira a senha" name="psw" required/>
    
    <Link to="/cadastrar">
    <button id="login" type="submit">Entrar</button>
    </Link>
    <Link to="/cadastrar">
    <button id="register" type="button">Cadastrar</button>
    </Link>
    
    <label>
        <input type="checkbox" checked="checked" name="lembre"/> Lembre de mim
    </label>
    </div>
    
    <div class="container">
    <button type="button" className="cancelbtn">Cancelar</button>
    </div>
    </form>
}

function Cadastrar(){
  return (
      <h2>Inserir tela cadastro</h2>
  )
}

function Login(){
  return (
    Home()
  )
}

