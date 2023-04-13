import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import EMP_logo from "./assets/images/EMP_logo.png";
import EMP_logo_pequeno from "./assets/images/EMP_logo_pequeno.png";
import "./App.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="cadastrar" element={<Cadastrar />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

function Home() {
  return (
    <div className="App">
      <div className="logo">
        <img src={EMP_logo} alt="Logo EMP" />
      </div>
      <br></br>
      <br></br>
      <ul>
        <li>
          <Link to="/login">
            <button class="botao-login">Entrar</button>
          </Link>
        </li>
        <li>
          <Link to="/cadastrar">
            <button class="botao-cadastro">Cadastrar</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Cadastrar() {
  return (
    <div className="App">
      <div className="logomenor">
        <img src={EMP_logo_pequeno} alt="Logo EMP" />
      </div>
      <div class="jumbotron text-center"></div>
        <form id="registerForm">
            <div class="container">
              <h1>Registrar nova conta</h1>
              <p>Por favor, preencha este formulário para criar sua conta.</p>
              <hr></hr>

              <label for="name"><b>Nome</b></label>
              <input type="text" placeholder="Insira seu nome" name="name" id="name"/>

              <label for="email"><b>E-mail</b></label>
              <input type="text" placeholder="Insira e-mail" name="email" id="email"/>
        
              <label for="psw"><b>Senha</b></label>
              <input type="password" placeholder="Insira a senha" name="psw" id="password"/>
        
              <hr></hr>
        
              <button id="submit" type="submit" class="registerbtn">Registrar</button>
            </div>
            <div class="container signin">
              <p>Já tem uma conta? <a href="login.html">Entrar</a></p>
            </div>
         </form>
      </div>
  );
}

function Login() {
  return (
    <div className="App">
      <div className="logomenor">
        <img src={EMP_logo_pequeno} alt="Logo EMP" />
      </div>
      <form id="Login">
        <div className="container">
          <h1>Login</h1>
          <label for="email">
            <b>E-mail</b>
          </label>
          <input
            type="text"
            placeholder="Insira e-mail"
            name="email"
            required
          />

          <label for="psw">
            <b>Senha</b>
          </label>
          <input
            type="password"
            placeholder="Insira a senha"
            name="psw"
            required
          />

          <Link to="/cadastrar">
            <button id="login" type="submit">
              Entrar
            </button>
          </Link>
          <Link to="/cadastrar">
            <button id="register" type="button">
              Cadastrar
            </button>
          </Link>

          <label>
            <input type="checkbox" checked="checked" name="lembre" /> Lembre de
            mim
          </label>
        </div>

        <div class="container">
          <button type="button" className="cancelbtn">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
