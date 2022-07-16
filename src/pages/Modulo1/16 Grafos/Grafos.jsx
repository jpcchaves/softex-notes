import React from "react";

const Grafos = () => {
  return (
    <>
      <h2>Grafos</h2>
      <p>
        Grafos são estruturas que permitem codificar relacionamentos entre pares
        de objetos, os quais são os vértices do grafo e os relacionamentos, suas
        arestas.
      </p>
      <p>
        Na imagem, as linhas são as arestas e unem os vértices, que são os
        círculos. Não é preciso que todos os vértices estejam conectados com
        todas as arestas e nem vice-versa.
      </p>
      <p>
        Os grafos têm várias aplicações no cotidiano, como nas redes sociais
        digitais com a conexão entre os usuários. Eles também estão, por
        exemplo, nas rotas de metrô, onde as estações são os vértices e as
        linhas são as arestas.
      </p>
      <h3>Grafos Direcionados</h3>
      <p>
        Os grafos são denominados direcionados quando algumas arestas têm setas
        apontando um sentido definido, ou seja, um vértice específico. Assim, se
        segue um caminho orientado de vértices conectados, mas essa relação não
        existe no caminho contrário.
      </p>
      <h3>Grafos não direcionados</h3>
      <p>
        Esse tipo de grafo não tem seta indicando um sentido definido. Assim, é
        possível relacionar dois vértices sem ter uma direção, então, a aresta
        pode ir em vários sentidos. Isso também implica que não são pares
        ordenados de vértice.
      </p>
      <h3>Grau de Vértice</h3>
      <p>
        O grau de vértice é definido pela quantidade de arestas que incidem
        nele. No caso de um grafo direcionado, deve-se perceber quantas arestas
        saem dele e somar com a quantidade das que chegam nele. Por exemplo, se
        há duas arestas direcionadas saindo de um vértice e só uma voltando,
        então ele é grau três.
      </p>
      <h3>Aplicado na Programação</h3>
      <p>
        Em programação, o conceito de grafos é muito utilizado em matriz,
        auxiliando a visualizar como fazer um caminho mais rápido para chegar do
        vértice 1 ao 5, por exemplo. Os aplicativos de mapas utilizam o conceito
        de grafos e são um dos mais usados no nosso cotidiano.
      </p>
      <p>
        Para modelar os mapas rodoviários, as interseções são repretensadas
        pelos vértices e as estradas pelas arestas
      </p>
      <p>Os circuitos integrados</p>
      <hr />
    </>
  );
};

export default Grafos;
