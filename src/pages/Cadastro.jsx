import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Breadcrumb from "../components/Breadcrumb";
import FormularioCampo from "../components/FormularioCampo";
import Botao from "../components/Botao";

function Cadastro() {

    const { cadastrar } = useAuth();

    const navigate = useNavigate();

    const [dadosCadastro, setDadosCadastro] =
        useState({
            nome: "",
            email: "",
            telefone: "",
            cpf: "",
            endereco: "",
            numero: "",
            cep: "",
            senha: "",
            confirmarSenha: ""
        });

    const [erros, setErros] =
        useState({});

    function alterarCampo(
        campo,
        valor
    ) {
        setDadosCadastro(
            (estadoAtual) => ({
                ...estadoAtual,
                [campo]: valor
            })
        );
    }

    function validarFormulario() {

        const novosErros = {};

        if (!dadosCadastro.nome.trim()) {
            novosErros.nome =
                "Informe seu nome";
        }

        if (!dadosCadastro.email.trim()) {
            novosErros.email =
                "Informe seu e-mail";
        }

        if (!dadosCadastro.telefone.trim()) {
            novosErros.telefone =
                "Informe seu telefone";
        }

        if (!dadosCadastro.cpf.trim()) {
            novosErros.cpf =
                "Informe seu CPF";
        }

        if (!dadosCadastro.endereco.trim()) {
            novosErros.endereco =
                "Informe seu endereço";
        }

        if (!dadosCadastro.numero.trim()) {
            novosErros.numero =
                "Informe o número";
        }

        if (!dadosCadastro.cep.trim()) {
            novosErros.cep =
                "Informe o CEP";
        }

        if (
            !dadosCadastro.confirmarSenha.trim()
        ) {

            novosErros.confirmarSenha =
                "Confirme sua senha";

        }
        else if (
            dadosCadastro.senha !==
            dadosCadastro.confirmarSenha
        ) {

            novosErros.confirmarSenha =
                "As senhas não coincidem";

        }

        setErros(novosErros);

        return (
            Object.keys(
                novosErros
            ).length === 0
        );
    }

    function realizarCadastro(
        evento
    ) {

        evento.preventDefault();

        if (
            !validarFormulario()
        ) {
            return;
        }

        console.log(
            "Cadastro:",
            dadosCadastro
        );

        const {
            confirmarSenha,
            ...dadosUsuario
        } = dadosCadastro;


        cadastrar(
            dadosUsuario
        );


        navigate(
            "/minha-conta"
        );

    }

    return (

        <section className="pagina-cadastro">

            <Breadcrumb
                itens={[
                    {
                        texto: "Home",
                        link: "/"
                    },
                    {
                        texto: "Cadastro"
                    }
                ]}
            />

            <div className="cadastro-container">

                <h1 className="pagina-titulo">
                    Criar Conta
                </h1>

                <form
                    className="cadastro-formulario"
                    onSubmit={
                        realizarCadastro
                    }
                    noValidate
                >

                    <FormularioCampo
                        id="nome"
                        rotulo="Nome Completo"
                        valor={dadosCadastro.nome}
                        onChange={(valor) =>
                            alterarCampo(
                                "nome",
                                valor
                            )
                        }
                        required
                        autoComplete="name"
                        erro={erros.nome}
                    />

                    <FormularioCampo
                        id="email"
                        tipo="email"
                        rotulo="E-mail"
                        valor={dadosCadastro.email}
                        onChange={(valor) =>
                            alterarCampo(
                                "email",
                                valor
                            )
                        }
                        required
                        autoComplete="email"
                        erro={erros.email}
                    />

                    <FormularioCampo
                        id="telefone"
                        tipo="tel"
                        rotulo="Telefone"
                        valor={dadosCadastro.telefone}
                        onChange={(valor) =>
                            alterarCampo(
                                "telefone",
                                valor
                            )
                        }
                        required
                        autoComplete="tel"
                        erro={erros.telefone}
                    />

                    <FormularioCampo
                        id="cpf"
                        rotulo="CPF"
                        valor={dadosCadastro.cpf}
                        onChange={(valor) =>
                            alterarCampo(
                                "cpf",
                                valor
                            )
                        }
                        required
                        erro={erros.cpf}
                    />

                    <FormularioCampo
                        id="endereco"
                        rotulo="Endereço"
                        valor={dadosCadastro.endereco}
                        onChange={(valor) =>
                            alterarCampo(
                                "endereco",
                                valor
                            )
                        }
                        required
                        autoComplete="street-address"
                        erro={erros.endereco}
                    />

                    <FormularioCampo
                        id="numero"
                        rotulo="Número"
                        valor={dadosCadastro.numero}
                        onChange={(valor) =>
                            alterarCampo(
                                "numero",
                                valor
                            )
                        }
                        required
                        erro={erros.numero}
                    />

                    <FormularioCampo
                        id="cep"
                        rotulo="CEP"
                        valor={dadosCadastro.cep}
                        onChange={(valor) =>
                            alterarCampo(
                                "cep",
                                valor
                            )
                        }
                        required
                        autoComplete="postal-code"
                        erro={erros.cep}
                    />

                    <FormularioCampo
                        id="senha"
                        tipo="password"
                        rotulo="Senha"
                        valor={dadosCadastro.senha}
                        onChange={(valor) =>
                            alterarCampo(
                                "senha",
                                valor
                            )
                        }
                        required
                        autoComplete="new-password"
                        erro={erros.senha}
                    />

                    <FormularioCampo
                        id="confirmarSenha"
                        tipo="password"
                        rotulo="Confirmar Senha"
                        valor={
                            dadosCadastro.confirmarSenha
                        }
                        onChange={(valor) =>
                            alterarCampo(
                                "confirmarSenha",
                                valor
                            )
                        }
                        required
                        autoComplete="new-password"
                        erro={
                            erros.confirmarSenha
                        }
                    />

                    <Botao
                        texto="Criar Conta"
                        onClick={realizarCadastro}
                    />

                </form>

                <div className="cadastro-links">

                    <Link
                        to="/login"
                        className="link-sem-estilo"
                    >
                        Já possui conta? Entrar
                    </Link>

                </div>

            </div>

        </section>

    );


}

export default Cadastro;
