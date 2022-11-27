import React, { useState } from "react"
import styled from "styled-components";

export default function Jogo (props) {
    const {imagens, inicio, erros,status,palavraJogo,palavraDoTurno} = props;

    return (
        <Container>
                <Imagem src={imagens[erros]}/>
                <Botao onClick={inicio} >Escolher palavra</Botao>
                <Palavra status={status} data-test="word" data-answer={palavraDoTurno}> {palavraJogo}</Palavra>
        </Container>
    )
}


const Container=styled.div`
display: flex;
justify-content: space-between;
height: 400px;
width: 700px;
font-family: 'Roboto', sans-serif;
`

const Imagem =styled.img`
width: 400;
height:466px;
margin: 20px 400px 300px 25px;
`
const Palavra= styled.h1`
color: ${(props)=> props.status};
font-size: 35px;

`
const Botao=styled.button`
  width: 150px;
  height: 50px;
  margin-top: 50px;
  background-color: #27AE60;
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 500;

`







