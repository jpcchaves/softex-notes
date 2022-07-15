import React from "react";

const BubbleSort = () => {
  return (
    <>
      <h2>
        <abbr title="Ordenação por Flutuação">Bubble Sort</abbr>
      </h2>
      <h3>O que é?</h3>
      <p>
        É um algoritmo de ordenação linear com estrutura simples e estável. A
        origem do nome está relacionado a leveza.
      </p>
      <p>
        No BubbleSort, os elementos mais leves vão para o início, assim como as
        bolhas menores sobem mais rápido.
      </p>
      <p>
        Contudo, ele é uma técnica pouco eficiente, pois consiste em comparar
        elemento por elemento até que ele esteja ordenado
      </p>
      <p>
        Em cada passagem, são comparados dois elementos, trazendo assim muita
        lentidão ao processo, pois são feitas várias passagens pelo processo.
      </p>
      <h3>Algoritmo de Ordenação</h3>
      <p>
        O algoritmo de ordenação reorganiza conjuntos de informações em ordem
        crescente ou decrescente, visando facilitar a visualização da lista. Na
        computação, as ordens mais usadas são a numérica e a lexicográfica.
      </p>
      <h3>Método de Ordenação</h3>
      <p>
        O método funciona no registro de um arquivo. Assim, cada registro tem
        sua própria chave para que seja possível controlar a ordenação. Caso a
        ordem das chaves não se altere durante a ordenação, o método é
        considerado estável.
      </p>
      <p>
        Esses métodos são classificados em dois tipos de ordenação:{" "}
        <strong>Interna</strong>: os registros ficam na memória principal e
        podem ser acessados a qualquer momento; <strong>Externa</strong>: os
        registros não ficam na memória principal e devem ser acessados por
        blocos.
      </p>
      <p>
        Os métodos consistem em comparar chaves. Existem os mais simples, que
        são indicados para listas menores, e os mais eficientes, que são
        recomendados para listas maiores, pois fazem uma comparação mais
        detalhista.
      </p>
      <p>
        O método bubble sort é o mais simples dos algoritmos de ordenação. Nele,
        as primeiras chaves são comparadas entre si. Caso a primeira chave "a"
        seja maior que a chave da posição "b", ela toma a posição "b" e "b" vai
        para a posição "a". Como podemos ver na imagem.
      </p>
      <hr />
    </>
  );
};

export default BubbleSort;
