
export default function Letras ({alfabeto, letrasSelecionadas, cliquei}) {
    

    return (
        <div className="alfabeto">
            {alfabeto.map((l)=> 
            <button onClick={()=> cliquei(l)} disabled={letrasSelecionadas.includes(l)} data-test="letter">{l.toUpperCase()}</button>)}
        </div>
    )

}
