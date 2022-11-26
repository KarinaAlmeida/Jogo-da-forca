export default function Chute ({chutar}) {
    
    return (
        <div className="chute"> 
            <h1>Já sei a palavra!</h1>
            <input disabled={chutar}></input>
            <button disabled={chutar}>Chutar</button>
        </div>
            
)
}

 