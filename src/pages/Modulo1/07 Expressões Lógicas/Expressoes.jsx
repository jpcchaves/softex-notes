import React from "react";

const Expressoes = () => {
  return (
    <>
      <h2>Expressões Lógicas e Tabela Verdade</h2>
      <p>
        Existem situações no nosso dia a dia que a resposta é simplesmente{" "}
        <strong>SIM</strong> ou <strong>NÃO</strong>. Como, por exemplo, quando
        perguntamos se um aluno foi aprovado ou reprovado. Ou quando queremos
        saber se um determinado produto está disponível para venda em um
        determinado site.
      </p>
      <p>
        Em algoritmos, utilizamos as expressões lógicas para resultados{" "}
        <strong>VERDADEIROS</strong> ou <strong>FALSOS</strong>
      </p>
      <h3>Operadores Relacionais</h3>
      <p>
        <p>
          <code>{" > "} Maior que</code>
        </p>
        <p>
          <code>{" >= "} Maior ou igual</code>
        </p>
        <p>
          <code>{" < "} Menor que</code>
        </p>
        <p>
          <code>{" <= "} Menor ou igual</code>
        </p>
        <p>
          <code>{" <>  "} Diferente de</code>
        </p>
      </p>
      <h3>Operadores Lógicos</h3>
      <p>
        <p>
          <code>
            <strong>{" E  "}</strong> Conjunção (se os dois forem verdadeiros, o
            resultado é verdadeiro)
          </code>
        </p>
        <p>
          <code>
            <strong>{" OU  "}</strong> Disjunção (se um dos dois forem
            verdadeiros, o resultado é verdadeiro)
          </code>
        </p>
        <p>
          <code>
            <strong>{" Não  "}</strong> (Negação/Inversão)
          </code>
        </p>
      </p>
      <h2>Expressões Lógicas</h2>
      <p>
        As expressões lógicas são usadas no nosso cotidiano e suas respostas
        são. proposições verdadeiras ou falsas. Um exemplo disso é quando um
        aluno pergunta ao professor se ele foi aprovado na disciplina.
      </p>
    </>
  );
};

export default Expressoes;
