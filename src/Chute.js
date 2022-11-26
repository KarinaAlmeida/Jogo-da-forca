export default function Chute ({inicio, setChutei, chutei, acabouNoChute}) {
    
    return (
        <div className="chute"> 
            <h1>Já sei a palavra!</h1>
            <input
            data-test="guess-input"
            disabled={!inicio}
            type="text"
            onChange={(e) => setChutei(e.target.value)}
            value={chutei}
            />
            <input
                    data-test="guess-button"
                    disabled={!inicio}
                    type="button"
                    value="Chutar"
                    onClick={acabouNoChute}
                />
        </div>
            
)
}

 