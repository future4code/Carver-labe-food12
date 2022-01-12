import React from "react"
import styled from "styled-components"
import {
ContainerGeral,
DescriçãoDePagina,
Nome,
Email,
Telefone,
ContainerEndereço,
Informacoes,
InformacoesEEdicao,
Botao1,
Botao2,
Descricao,
Endereco,
EnderecoEEdicao,
Divisor,
HistoricoDePedidos
} from "./Details-style"





const Details = () => {
    return(
        <ContainerGeral>

                <DescriçãoDePagina>
                    <p>Meu Perfil</p>
                </DescriçãoDePagina>

            <Divisor/>
                <InformacoesEEdicao>
                    <Informacoes>
                        <Nome>
                            <p>Fulano de Oliveira</p>
                        </Nome>
                        <Email>
                            <p>Fulano@hotmail.com</p>
                        </Email>
                        <Telefone>
                            <p>55-(21)99999-999</p>
                        </Telefone>
                    </Informacoes>
                        <Botao1>
                            <h4>✏️</h4>
                        </Botao1>
                </InformacoesEEdicao>



                <EnderecoEEdicao>
                    <ContainerEndereço>
                        <Descricao>
                            <h3>Endereço Cadastrado</h3>
                        </Descricao>
                        <Endereco>
                            <p>Rua Longe Pra caramba numero 13</p>
                        </Endereco>
                    </ContainerEndereço>
                        <Botao2>
                          <h4>✏️</h4>
                        </Botao2>
                </EnderecoEEdicao>


                <HistoricoDePedidos>
                    <p>Historico de Pedidos</p>
                </HistoricoDePedidos>
                {/* <Divisor/> */}
        </ContainerGeral>
    )
}

export default Details