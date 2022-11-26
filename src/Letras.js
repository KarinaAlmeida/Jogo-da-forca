

export default function Letras ({inicio, letraSelecionada, comparaLetras,}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
     "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="alfabeto">
            {alfabeto.map((letras)=> <button data-test="letter"
                    disabled={(!inicio) ? !letraSelecionada.includes(letras) : letraSelecionada.includes(letras)}
                    onClick={() => comparaLetras(letras)}
                    className={(letraSelecionada.includes(letras)) ? "Disabled" : (inicio) ? "Disabled Enabled" : "Disabled"}>{letras.toUpperCase()}</button>)}
        </div>
    )

}

