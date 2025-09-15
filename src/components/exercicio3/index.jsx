import React, { useState } from "react";
import './index.css'

export default function Exercicio3() {
  const [nome, setNome] = useState("");
  const [livro, setLivro] = useState("");
  const [paginas, setPaginas] = useState("");
  const [segundosPagina, setSegundosPagina] = useState("");

  const totalSegundos = paginas && segundosPagina ? paginas * segundosPagina : 0;
  const totalHoras = totalSegundos / 3600;

  return (
    <div className="exercicio3-container">
      <h3>Você lê rápido?</h3>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade. de páginas"
        value={paginas}
        onChange={(e) => setPaginas(e.target.value)}
      />
      <input
        type="text"
        placeholder="Livro"
        value={livro}
        onChange={(e) => setLivro(e.target.value)}
      />
      <input
        type="number"
        placeholder="Segundos por página"
        value={segundosPagina}
        onChange={(e) => setSegundosPagina(e.target.value)}
      />

      <button>Calcular</button>

      <p>{nome}, você finalizará a leitura do livro {livro} em aproximadamente{" "}

      {totalHoras.toFixed(2)} horas.
      </p>
    </div>
  );
}