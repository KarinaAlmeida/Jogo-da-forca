

export default function Letras ({teclas}) {
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    return (
        <div className="alfabeto">
            {alfabeto.map((letras)=> <button disabled={teclas}>{letras}</button>)}
        </div>
    )

}


