import FormularioCampo from "./FormularioCampo";

function CheckoutFormulario({
    dadosCliente = {},
    erros = {},
    onAlterar

}) {


    function alterarCampo(
        campo,
        valor
    ){
        onAlterar?.(
            campo,
            valor
        );

    }

    return (

        <form

            className="checkout-formulario"
            noValidate

        >
            <h3 className="checkout-formulario-titulo">
                Dados do Comprador
            </h3>

            <FormularioCampo
                className="checkout-formulario-secao"
                id="nome"
                rotulo="Nome completo"
                placeholder="Digite seu nome"
                valor={dadosCliente.nome}
                onChange={(valor)=>
                    alterarCampo(
                        "nome",
                        valor
                    )
                }
                required
                minLength={3}
                maxLength={80}
                autoComplete="name"
                erro={erros.nome}

            />



            <FormularioCampo
                className="checkout-formulario-secao"
                id="email"
                tipo="email"
                rotulo="E-mail"
                placeholder="exemplo@email.com"
                valor={dadosCliente.email}
                onChange={(valor)=>
                    alterarCampo(
                        "email",
                        valor
                    )
                }
                required
                maxLength={120}
                autoComplete="email"
                erro={erros.email}

            />


            <FormularioCampo
                className="checkout-formulario-secao"
                id="telefone"
                tipo="tel"
                rotulo="Telefone"
                placeholder="(99) 99999-9999"
                valor={dadosCliente.telefone}
                onChange={(valor)=>
                    alterarCampo(
                        "telefone",
                        valor
                    )
                }
                required
                minLength={10}
                maxLength={15}
                pattern="[0-9()\-\s]+"
                inputMode="tel"
                autoComplete="tel"
                erro={erros.telefone}

            />



            <FormularioCampo
                className="checkout-formulario-secao"
                id="cpf"
                tipo="text"
                rotulo="CPF"
                placeholder="000.000.000-00"
                valor={dadosCliente.cpf}
                onChange={(valor)=>
                    alterarCampo(
                        "cpf",
                        valor
                    )
                }
                required
                minLength={11}
                maxLength={14}
                pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}"
                inputMode="numeric"
                autoComplete="off"
                erro={erros.cpf}

            />



            <FormularioCampo
                className="checkout-formulario-secao"
                id="endereco"
                rotulo="Endereço"
                placeholder="Rua ..., Avenida ..."
                valor={dadosCliente.endereco}
                onChange={(valor)=>
                    alterarCampo(
                        "endereco",
                        valor
                    )
                }
                required
                minLength={5}
                maxLength={150}
                autoComplete="street-address"
                erro={erros.endereco}

            />

            <FormularioCampo
                className="checkout-formulario-secao"
                id="numero"
                rotulo="Número"
                placeholder="00 ou A01..."
                valor={dadosCliente.numero}
                onChange={(valor)=>
                    alterarCampo(
                        "numero",
                        valor
                    )
                }
                required
                minLength={1}
                maxLength={10}
                autoComplete="off"
                erro={erros.numero}

            />


            <FormularioCampo
                className="checkout-formulario-secao campo-obrigatorio"
                id="cep"
                rotulo="CEP"
                placeholder="00000-000"
                valor={dadosCliente.cep}
                onChange={(valor)=>
                    alterarCampo(
                        "cep",
                        valor
                    )
                }
                required
                minLength={8}
                maxLength={9}
                pattern="[0-9]{5}-?[0-9]{3}"
                inputMode="numeric"
                autoComplete="postal-code"
                erro={erros.cep}

            />


        </form>

    );

}


export default CheckoutFormulario;