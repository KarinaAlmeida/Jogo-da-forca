
export default function Chute ({disableInput, chutei, setChutei, chute, disableBotao }) {
    
    return (
        <div className="chute"> 
            <h1>Já sei a palavra!</h1>
            <input disabled={disableInput} value={chutei} onChange={(e) => setChutei(e.target.value)} data-test="guess-input" ></input>
            <button onClick={chute} disabled={disableBotao} data-test="guess-button">Chutar</button>
        </div>
            
)
}
 