

export default function Jogo ({inicio, palavra, jogar, palavraEscondida, erro, fimDeJogoStatus}) {

    return (
        <div className="jogo">
            <img data-test="game-image" src={`./assets/forca${erro}.png`} />
            <div className="palavra">
                <input data-test="choose-word" onClick={jogar}
                    type="button" value={"Escolher Palavra"} />
                <div
                    className={fimDeJogoStatus}
                    data-test="word"
                    data-answer={palavra}
                >{palavraEscondida.join('')}</div>
            </div>
        </div>
    )
}
