import Jogo from "./Jogo" 
import Letras from "./Letras"
import Chute from "./Chute"
import palavras from "./palavras"
import React, { useState } from "react"



export default function App() {
  const [inicio, setInicio] = useState(false);
  const [palavra, setPalavra] = useState("");
  const [palavraEscondida, setPalavraEscondida] = useState([""]);
  const [letraSelecionada, setLetraSelecionada] = useState([]);
  const [arrayDaPalavra, setArrayDaPalavra] = useState([]);

  const [erro, setErro] = useState(0);
  const [fimDeJogoStatus, setFimDeJogoStatus] = useState("");
  const [chutei, setChutei] = useState("");

  function jogar() {
    setInicio(true);
    setFimDeJogoStatus("");
    setErro(0);
    setLetraSelecionada([]);

    let palavraNova = palavras[palavraDaRodada()];
    (palavraNova === palavra) ? palavraNova = palavras[palavraDaRodada()] : setPalavra(palavraNova);
    setArrayDaPalavra(Array.from(palavraNova));
    setPalavraEscondida(Array.from(palavraNova).map((element) => element = "_"));
    
}

/*joga palavra aleatoria*/
function palavraDaRodada() {
  return Math.round(Math.random() * palavras.length);
}

function comparaLetras (letra) {
  setLetraSelecionada([...letraSelecionada, letra]);
  if (!letra.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").includes(letra)) {
    let erros = erro + 1;
    setErro(erros)
    fimDeJogo(palavraEscondida, erros);
  } else {
    mostrarLetras(letra);
  }
}

function mostrarLetras (letra) {
  const contem = palavraEscondida.map((e, i) => (arrayDaPalavra[i].normalize("NFD").replace(/[^a-zA-Z\s]/g, "") === letra) ? e = arrayDaPalavra[i] : e)
  setPalavraEscondida(contem);
  fimDeJogo(contem);
}

function fimDeJogo (palavra, erros) {
  if (!palavra.includes("_")) {
    limpaJogo("vitoria");
  } else if (palavra.includes("_") && erros === 6) {
    limpaJogo("derrota");
  }
}


function acabouNoChute() {
  if (chutei === palavra) {
    limpaJogo("vitoria");
  } else if (chutei !== palavra) {
    limpaJogo("derrota");
    setErro(6);
  }
}

/*limpando as variáveis*/
function limpaJogo(result) {

  setFimDeJogoStatus(result);
  setInicio(false);
  setLetraSelecionada([]);
  setChutei("");
  setPalavraEscondida(Array.from(palavra));
}


  return (
    <div className="App">
      <Jogo inicio={inicio} 
      palavra={palavra} 
      jogar={jogar} 
      palavraEscondida={palavraEscondida} 
      erro={erro} 
      fimdeJogoStatus={fimDeJogoStatus}/>

      <Letras inicio={inicio} 
      letraSelecionada={letraSelecionada} 
      comparaLetras={comparaLetras} 
      erro={erro} />
      
      <Chute inicio={inicio} 
      setChutei={setChutei} 
      chutei={chutei} 
      acabouNoChute={acabouNoChute}/>
    </div>
  );
}



  