import Jogo from "./Jogo" 
import Letras from "./Letras"
import Chute from "./Chute"
import palavras from "./Palavras"
import React, { useState } from "react"
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const imagens = [forca0,forca1,forca2,forca3,forca4,forca5,forca6];



export default function App() {
    const [disableInput,setDisableInput] = useState(true); //começa desabilitado e habilita ao clicar em escolher palavra
    const [disableBotao,setDisableBotao] = useState(true);


    const [palavraSelecionada,setPalavraSelecionada] = useState([]);
    const [palavraDoTurno,setPalavraDoTurno] = useState([]);
    const [palavraJogo,setPalavraJogo] = useState([]);


    const [erros,setErros] = useState(0); //começam zerados e a cada comparação e adição colocam uma imagem a mais na tela
    
    const [letrasSelecionadas,setLetrasSelecionadas] = useState(alfabeto);// letra clicada no alfabeto


    const [chutei,setChutei] = useState(); //
    const [status,setStatus] = useState(); //diz se acertou ou perdeu e troca a cor
    
    const [palavraNormal,setPalavraNormal] = useState(""); //habilita caracteres especiais


    //FUNÇÕES

    function inicio(){
      setDisableInput(false);
      setLetrasSelecionadas([]);
      selecaoDaPalavra(); /*função que escolhe a palavra */
      setErros(0);
      setDisableBotao(false);
  }


  function selecaoDaPalavra(){
    const sorteada = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[sorteada];
    const palavraSorteada= palavra.split("");

    setPalavraDoTurno(palavra);
    setPalavraSelecionada(palavraSorteada)
    console.log(palavraSelecionada);
    let espacinhos= [];
    palavraSorteada.forEach((l)=>espacinhos.push("_ "));
    setPalavraJogo(espacinhos);
   
    
    const palavraNormal=palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    setPalavraNormal(palavraNormal);
    
  }

  function cliquei (letra) {
    setLetrasSelecionadas ([...letrasSelecionadas, letra]) 
    if(palavraNormal.includes(letra)) {
      acertou(letra);
    }else{
      errou(letra)
    }
   }

   function acertou(letra) {
    const palavrinha= [...palavraJogo];
    palavraSelecionada.forEach((l, i) => {
      if (palavraNormal[i]===letra){
        palavrinha[i]=l;
      }
    });
    setPalavraJogo (palavrinha);
    if(!palavrinha.includes("_ ")){
      setStatus("vitoria");
      Acabou();
    }

   }

   function errou(letra){
    const errou= erros+1
    setErros(errou);
    if(erros+1===6){
      setStatus("derrota");
      Acabou();
    }
   }

   function Acabou() {
   setLetrasSelecionadas(alfabeto);
   setDisableInput(true);
   setChutei("");
   setPalavraJogo(palavraSelecionada)
   setDisableBotao(true);
    }

    function chute(){
      let palavraInput=palavraSelecionada.join("");
      if (chutei===palavraInput || chutei===palavraNormal){
        setStatus("green");
      }else{
        setStatus("red");
        setErros(6);
      }
    
    }



//render
  return (
    <div className="App">
      <Jogo imagens={imagens} inicio={inicio} erros={erros} status={status} palavraJogo={palavraJogo} palavraDoTurno={palavraDoTurno}/>
      <Letras alfabeto={alfabeto} letrasSelecionadas={letrasSelecionadas} cliquei={cliquei} />
      <Chute disableInput={disableInput} disableBotao={disableBotao} chutei={chutei} setChutei={setChutei} chute={chute} />
    </div>
  );
}
