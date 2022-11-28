
export default function Letras ({alfabeto, letrasSelecionadas, cliquei}) {
    

    return (
        <div className="alfabeto">
            {alfabeto.map((l)=> 
            <button data-test="letter" onClick={()=> cliquei(l)} disabled={letrasSelecionadas.includes(l)} >{l.toUpperCase()}</button>)}
        </div>
    )

}
