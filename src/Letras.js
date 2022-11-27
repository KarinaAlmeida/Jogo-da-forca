import styled from "styled-components"

export default function Letras ({alfabeto, letrasSelecionadas, cliquei}) {
    

    return (
        <Alfabeto>
            {alfabeto.map((l)=> 
            <Botao onClick={()=> cliquei(l)} disabled={letrasSelecionadas.includes(l)} data-test="letter">{l}</Botao>)}
        </Alfabeto>
    )

}

const Alfabeto=styled.div`
width: 650px;
  margin-top: 130px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

`
const Botao=styled.button`
width: 40px;
  height: 40px;
  color: #7AA7C7;
  border: 1px solid #7AA7C7;
  background-color: #E1ECF4;
  border-radius: 3px;   
  font-size: 16px;
  font-weight: 700;
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
  :disabled{
    background-color: #9faab5;
        border: 1px solid #9faab5;
        color: #79818a;
  }
`
