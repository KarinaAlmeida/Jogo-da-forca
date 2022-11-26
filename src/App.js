import Jogo from "./Jogo" 
import Letras from "./Letras"
import Chute from "./Chute"
import palavras from "./palavras"
import React, { useState } from "react"



export default function App() {
  const [teclas, setTeclas] = useState(true)
  const [chutar, setChutar] = useState(true)
  const palavra = Math.floor(Math.random() * palavras.length);
  const [palavrinha, setPalavrinha] = useState("");

  function inicia() {
    const resposta = palavras[palavra];
    const palavraSorteada = resposta.split("");
    console.log(palavraSorteada);
    for(let i = 0; i < palavraSorteada.length; i++){
        palavraSorteada[i] = "_  " 
    }
    setPalavrinha(palavraSorteada);
    setTeclas(false);
    setChutar(false);
    
}

  return (
    <div className="App">
      <Jogo inicia={inicia} palavrinha={palavrinha}/>
      <Letras teclas={teclas} />
      <Chute chutar={chutar}/>
    </div>
  );
}