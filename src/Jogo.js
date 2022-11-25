import React, { useState } from "react"
// import palavras from "./palavras"

export default function Jogo ({inicia, palavrinha}) {
    return (
        <div class="estado-inicial">
            <div class="imagem-forca">
                <img src="./assets/forca0.png" />
            </div>
            <div class="button">
                <button onClick={inicia} >Escolher palavra</button>
                <div class="palavrinha">{palavrinha}</div>
            </div>
        </div>
    )
}