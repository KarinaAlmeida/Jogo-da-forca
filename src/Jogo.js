import React, { useState } from "react"

export default function Jogo (props) {
    const {imagens, inicio, erros,status,palavraJogo,palavraDoTurno,} = props;

    return (
        <div className="estado-inicial">
          <div className="imagem-forca">
                <img src={imagens[erros]} data-test="game-image"/>
          </div> 
          <div className="button">
                <button  data-test="choose-word" onClick={inicio} >Escolher palavra</button>
                <div class={`palavrinha ${status}`} data-test="word" data-answer={palavraDoTurno}
                
                > {palavraJogo}</div>
          </div>
        </div>
    )
}


