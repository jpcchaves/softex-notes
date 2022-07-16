import React from "react";

const Insertion = () => {
  return (
    <>
      <h2>InsertionSort e SelectionSort</h2>
      <h3>Insertion Sort</h3>
      <p>
        É a inserção ordenada. Ele executa o método de ordenação várias vezes
        para colocar uma lista em sequência
      </p>
      <p>
        O insertion sort é um algoritmo de ordenação que constrói uma matriz
        final com um elemento de cada vez, ou seja, uma inserção por vez, caso
        receba uma estrutura como array ou list.
      </p>
      <p>
        Imagine uma lista com 10 elementos. Os 9 primeiros elementos estão
        ordenado, mas o último não está. Para encaixar esse último elemento e
        ordenar a lista, vamos comparar o valor do elemento com o seu anterior,
        até que ele esteja na posição correta dentro da lista.
      </p>
      <p>
        Imagine a situação de organizar um baralho de cartas enquanto jogamos.
        Você está com as cartas na mão e as organizou na ordem: 2,4,6,8. Agora,
        você recebeu uma nova carta com o número 3 e deve colocá-la na posição
        correta na sua mão de forma que as cartas obedeçam a ordenação e fiquem
        organizadas. Cada nova carta adicionada pode ser menor ou maior que as
        outras que você já tem. Assim, você compara as novas com as antigas para
        encontrar a sua posição correta, colocando-as em ordem.
      </p>
      <h3>Selection Sort</h3>
      <p>
        Funciona de forma bem direta, selecionando o menor número da lista e
        colocando ele na primeira posição.
      </p>
      <p>
        O objetivo do selection sort é ordenar a lista a partir da seleção dos
        menores itens possíveis de cada iteração e os organizando da esquerda
        para a direita.
      </p>
      <p>
        Para que cada item da lista a percorra, são necessários dois loops: um
        para cada elemento; outro para cada um desses percorrer toda a lista, da
        mesma forma que acontece com o bubble sort.
      </p>
      <p>
        A partir da primeira posição, é escolhido um número, que é comparado com
        os da sua direita. Quando é encontrado um número menor que ele, eles
        trocam de posições entre si, ou seja, o escolhido assume a posição do
        menor e vice-versa.
      </p>
      <p>
        Ou seja, o algoritmo vai ficar percorrendo a lista sempre pegando o
        menor elemento e ordenando.
      </p>
      <h3>Insertion vs Selection</h3>
      <p>
        Possuem a mesma complexidade, mas, na prática, o insertion tem um
        desempenho superior.
      </p>
      <p>
        O insertion sort é o mais eficiente quando comparado a outros métodos de
        ordenação, como o bubble sort e o selection sort.
      </p>
      <p>
        Contudo, em comparação aos métodos de divisão e conquista, como o merge
        sort e quicksort, ele é menos eficiente.
      </p>
      <h3>Vantagens e Desvantagens do Insertion Sort</h3>
      <p>
        Vantagens: consome pouca memória no disco, é muito estável e é o ideal
        para ordenar poucos números; <br /> Desvantagem: devido ao seu método de
        comparação, leva muito tempo para ordenar uma grande quantidade de
        números.
      </p>
      <h3>Vantagens e Desvantagens do Selection Sort</h3>
      <p>
        Vantagens: é de fácil implementação e ocupa menos memória que o quick
        sort e o merge sort, os quais utilizam a estratégia de “dividir e
        conquistar”; <br /> Desvantagem: tem maior tempo de execução, assim, não
        é recomendado para listas grandes.
      </p>
    </>
  );
};

export default Insertion;
