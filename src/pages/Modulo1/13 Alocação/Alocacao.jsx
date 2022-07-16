import React from "react";

const Alocacao = () => {
  return (
    <>
      <h2>Alocação Dinâmica e Ponteiros</h2>
      <h3>Alocação de memória</h3>
      <p>
        O processo de execução de memória é dividido em várias partes lógicas.
        As mais importantes são: Text, Data, BSS, Heap e Stack. Já os três tipos
        de alocação de memória são: estática, automática e dinâmica.
      </p>
      <h4>Alocação Dinâmica</h4>
      <p>
        Na alocação dinâmica, é reservado um espaço na memória durante a
        execução da aplicação. Assim, é possível alocar o espaço na memória
        enquanto o programa está rodando. O programa solicita as áreas de
        memória e, quando elas não são mais necessárias, ele as libera durante a
        execução do programa ou quando se encerrar. Na dinâmica, os pedidos da
        memória são alocados na área chamada Heap.
      </p>
      <p>
        Na biblioteca C, existem quatro funções nativas: malloc, calloc, realloc
        e free. Malloc: aloca o espaço para um bloco de bytes na memória RAM e
        devolve o endereço do bloco. Representação do código: int*ptr; {"->"}
        declara um ponteiro do tipo inteiro 2. ptr = (int *) malloc(5 * sizeof
        (int)); {"->"} ptr recebe o endereço de memória do primeiro elemento do
        vetor de inteiros. int ptr[5]; {"->"} declara um vetor do tipo inteiro
        com cinco elementos.
      </p>
      <p>
        Calloc: funciona como a malloc, mas ela zera os elementos após alocar os
        espaços. int *ptr; {"->"} declara um ponteiro do tipo inteiro 2. ptr =
        (int *) calloc(5 * sizeof (int)); {"->"} ptr recebe o endereço de
        memória do primeiro elemento do vetor de inteiros. int ptr[5]; {"->"}{" "}
        declara um vetor do tipo inteiro com cinco elementos.
      </p>
      <p>
        Realloc: altera a quantidade de posições de memória alocadas através das
        funções malloc e calloc. int *ptr; {"->"} declara um ponteiro do tipo
        inteiro. ptr = (int *) malloc(5 * sizeof (int)); {"->"} ptr recebe o
        endereço de memória do primeiro elemento do vetor de inteiros. ptr =
        (int *) realloc(ptr , 10 * sizeof (int)); {"->"} ptr recebe o endereço
        de memória do novo vetor agora com dez elementos.
      </p>
      <p>
        Free: remove a memória que foi alocada pelas funções malloc, calloc ou
        realloc, avisando ao programa que o bloco está disponível. free(): void
        free(void *ptr); {"->"} libera o espaço alocado.
      </p>
      <h3>Ponteiros</h3>
      <p>
        O ponteiro é uma variável que recebe e guarda o endereço de memória de
        outra variável. Para declarar uma variável como ponteiro, deve-se
        utilizar o símbolo "*" entre o tipo e o nome, dessa forma: Tipo_variavel
        * Nome_variavel.
      </p>
      <p>
        Também se utiliza o operador "{"&"}", usado para adquirir o endereço da
        variável. int varA = 1; int * pt_varA; pt_varA = {"&"} varA {"->"}{" "}
        atribui o endereço de “varA” para o ponteiro “varA”. Para acessar o
        endereço, basta utilizar o operador "*". *pt_varA;
      </p>
      <hr />
    </>
  );
};

export default Alocacao;
