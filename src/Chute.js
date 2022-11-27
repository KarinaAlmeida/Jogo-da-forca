import styled from "styled-components";

export default function Chute ({disabledInput, chutei, setChutei, chute, disabledBotao }) {
    
    return (
        <Chutes> 
            <Texto>Já sei a palavra!</Texto>
            <Input disabled={disabledInput} value={chute} onChange={(e) => setChutei(e.target.value)} data-test="guess-input" ></Input>
            <Botao onClick={chute} disabled={disabledBotao}>Chutar</Botao>
        </Chutes>
            
)
}


const Chutes=styled.div`
font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 600px;
`
const Texto=styled.h1`
 font-size: 20px;
  font-weight: 400;
  padding-right: 10px;
`

const Input=styled.input`
background: #FFFFFF;
  border: 1px solid #CCCCCC;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  width: 353px;
  height: 40px;

`

const Botao=styled.button`
width: 100px;
  height: 40px;
  color: #3C76A1;
  background: #E1ECF4;
  border: 1px solid #7AA7C7;
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  margin-left: 10px;

  :disabled{
    background-color: #9faab5;
        border: 1px solid #9faab5;
        color: #79818a;
        cursor: default;
  }
`

