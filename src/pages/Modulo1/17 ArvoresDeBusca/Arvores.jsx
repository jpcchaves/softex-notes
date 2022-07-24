import React from "react";

const Arvores = () => {
  return (
    <>
      <h2>Arvores de Busca</h2>
      <h3>Avores e Subarvores</h3>
      <h4>Estruturas Lineares</h4>
      <p>
        As estruturas lineares como, por exemplo, uma Lista, apresenta um fator
        limitante, que é o uso sequencial aos elementos da estrutura.
      </p>
      <p>
        Para barrar isso, podemos usar estruturas não lineares, como dividir uma
        lista em dois grupos ou mais.
      </p>
      <p>
        Essas estruturas não lineares que fazem a divisão dos nós a cada
        elemento (as árvores de busca)
      </p>
      <p>
        Dessa forma, árvores podem ser aplicadas para tornar os métodos de busca
        mais eficientes.
      </p>
      <h3>O que é uma árvore?</h3>
      <p>É um conjunto finito de elementos, os NÓS.</p>
      <p>
        Em uma "Árvore T", existe um nó especial "r" que é a RAIZ. A forma mais
        comum de representar uma árvore é em um GRÁFICO HIERARQUIZADO.
      </p>
      <p>
        As folhar são as partes finais da árvore. E a altura é a medida no nível
        máximo de NÓS
      </p>
      <h3>Subarvore</h3>
      <p>As subarvores são os NÓS que têm filhos</p>
      <h3>Árvore Binária de Busca</h3>
      <p>
        É um tipo de árvore de busca onde os elementos são organizados de forma
        que todos os que estão localizados a esquerda de cada nó tenha o
        valor-chave menor ou igual ao nó pai. Já os localizados a direita,
        apresentar valor-chave maior que a chave do nó.
      </p>
      <p>É um método eficiente porque poupa processamento desnecessário</p>
      <h3>Remoção de valores</h3>
      <h4>Se o nó não tiver filho</h4>
      <p>Basta remover o nó ou substituí-lo pelo seu único filho</p>
      <h4>Nó com dois filhos</h4>
      <p></p>
      <hr />
    </>
  );
};

export default Arvores;
