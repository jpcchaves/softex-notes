import React from "react";

const QuickSort = () => {
  return (
    <>
      <h2>QuickSort, MergeSort</h2>
      <h3>QuickSort</h3>
      <p>
        Funciona a partir do particionamento do muto. O algoritmo escolhe um
        número dentro da lista, este número é chamado de pivot. Todos os números
        menores ou iguais ficam do lado esquerdo e os maiores vão para o lado
        direito
      </p>
      <p>
        O quicksort baseia-se em uma rotina fundamental de particionamento.
        “Particionar” significa escolher um número qualquer, chamado de pivô,
        presente no array e colocá-lo em uma posição onde todos os elementos à
        sua esquerda são menores ou iguais a ele e todos os elementos à sua
        direita são maiores.
      </p>
      <p>O quicksort funciona localmente e seu tempo de execução não é bom.</p>
      <h3>Merge Sort</h3>
      <p>
        É um algoritmo de divisão e conquista baseado no método merge que
        durante o processo recebe três índices: left, middle, right
      </p>
      <p>
        Assim como o quicksort, o mergesort também utiliza o paradigma “dividir
        e conquistar''. Apesar de parecer que a lista é dividida, não é isso que
        ocorre. O que acontece é uma quebra da lista até que reste apenas um
        elemento.
      </p>
      <p>
        Os índices (left, middle e right) auxiliam o algoritmo na análise,
        delimitando a lista e mostrando onde ele vai agir. O left e o right
        ficam na posição inicial e final, respectivamente. Já o middle fica no
        meio onde as quebras na lista serão feitas.
      </p>
      <p>
        Dividimos repetidamente a lista em partes iguais até que sobre apenas um
        único elemento por lista
      </p>
      <p>
        Com os valores separados unitariamento, iremos realizar as comparações
        de um a um, verificando qual o maior valor, em seguida iremos juntar
        esses valores em listas de dois, de forma que o menos valor venha antes
        do maior
      </p>
      <p>
        Exemplo: <br />
        <code>
          [7, 12, 10, 8, 19, 5, 3, 90] <br /> [7, 12, 10, 8] [19, 5, 3,
          90] <br />
          [7, 12] [10, 8] [19, 5] [3, 90] <br /> [7] [12] [10] [8] [19] [5] [3]
          [90]
          <br />
          [7, 12] [8,10] [5,19] [3, 90] <br />
          [7, 8, 10, 12] [3, 5, 19, 90] <br />
          [3, 5, 7, 8, 10, 12, 19, 90]
        </code>
      </p>
      <h3>Quick vs Merge</h3>
      <p>
        Em comparação, o quicksort acaba sendo mais rápido do que o mergesort
        pois suas constantes são menores
      </p>
    </>
  );
};

export default QuickSort;
