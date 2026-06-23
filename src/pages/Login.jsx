import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import usuarioDemo from "../data/usuarioDemo";

import Breadcrumb from "../components/Breadcrumb";
import FormularioCampo from "../components/FormularioCampo";
import Botao from "../components/Botao";

function Login() {

    const navigate = useNavigate();

    const {login} = useAuth();

    const [dadosLogin, setDadosLogin] =
        useState({
            email: "",
            senha: ""
        }
    );

    const [erros, setErros] =useState({});

    function alterarCampo(
        campo,
        valor
    ) {
        setDadosLogin(
            (estadoAtual) => ({
                ...estadoAtual,
                [campo]: valor
            })
        );
    }

    function validarFormulario() {

        const novosErros = {};

        if (!dadosLogin.email.trim()) {
            novosErros.email =
                "Informe seu e-mail";
        }

        if (!dadosLogin.senha.trim()) {
            novosErros.senha =
                "Informe sua senha";
        }

        setErros(novosErros);

        return (
            Object.keys(
                novosErros
            ).length === 0
        );
    }

    function realizarLogin(evento) {

        evento.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        if (
            dadosLogin.email === usuarioDemo.email &&
            dadosLogin.senha === usuarioDemo.senha
        ) {

            login(
                usuarioDemo
            );

            navigate(
                "/minha-conta"
            );

            return;
        }

        setErros({

            email: "",
            senha: "E-mail ou senha inválidos"

        });

    }

    return (

        <section className="pagina-login">

            <Breadcrumb
                itens={[
                    {
                        texto: "Home",
                        link: "/"
                    },
                    {
                        texto: "Entrar"
                    }
                ]}
            />

            <div className="login-container">

                <h1 className="pagina-titulo">
                    Entrar
                </h1>

                <p className="login-demo">
                    Usuário Demo: demo@tadsstore.com
                </p>

                <p className="login-demo">
                    Senha: 123456
                </p>

                <form
                    className="login-formulario"
                    onSubmit={realizarLogin}
                    noValidate
                >

                    <FormularioCampo
                        id="email"
                        tipo="email"
                        rotulo="E-mail"
                        placeholder="Digite seu e-mail"
                        valor={
                            dadosLogin.email
                        }
                        onChange={(valor) =>
                            alterarCampo(
                                "email",
                                valor
                            )
                        }
                        required
                        autoComplete="email"
                        erro={
                            erros.email
                        }
                    />

                    <FormularioCampo
                        id="senha"
                        tipo="password"
                        rotulo="Senha"
                        placeholder="Digite sua senha"
                        valor={
                            dadosLogin.senha
                        }
                        onChange={(valor) =>
                            alterarCampo(
                                "senha",
                                valor
                            )
                        }
                        required
                        autoComplete="current-password"
                        erro={
                            erros.senha
                        }
                    />

                    <Botao
                        texto="Entrar"
                        onClick={realizarLogin}
                    />

                </form>

                <div className="login-links">

                    <Link
                        to="/cadastro"
                        className="link-sem-estilo"
                    >
                        Criar conta
                    </Link>

                </div>

            </div>

        </section>
    );


}

export default Login;
