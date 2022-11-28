
export default function Chute ({disabledInput, chutei, setChutei, chute, disabledBotao }) {
    
    return (
        <div className="chute"> 
            <h1>Já sei a palavra!</h1>
            <input disabled={disabledInput} value={chutei} onChange={(e) => setChutei(e.target.value)} data-test="guess-input" ></input>
            <button onClick={chute} disabled={disabledBotao} data-test="guess-button">Chutar</button>
        </div>
            
)
}
