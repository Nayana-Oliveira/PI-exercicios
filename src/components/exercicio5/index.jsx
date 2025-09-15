import React, { useState } from "react";
import './index.css'

export default function Exercicio5() {
    const [real, setReal] = useState("")
    const [resultado, setResultado] = useState("")

    function calcular() {
        const valor = Number()
    }

    return(
        <div className="exercicio5-container">
            <h1>Câmbio de Dólar</h1>
            <h2>Converta o valor de Real em Dólar</h2>

            <input type="text" placeholder="Informe o valor em Real" />
            <button>Calcular</button>
            <h3>Valor do Dólar: R$5,34</h3>
            <h3>Conversão: $</h3>
        </div>
    )
}