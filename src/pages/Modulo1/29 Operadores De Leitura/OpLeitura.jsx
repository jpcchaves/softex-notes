import React from "react";

const OpLeitura = () => {
  return (
    <>
      <h2>Operadores de leitura e escrita em arquivos externos</h2>
      <p>
        Programas que não recebem valores de entrada do usuário são comuns e,
        geralmente, estão sendo executados em segundo plano, colhendo
        informações de banco de dados e atualizando os seus valores. Para isso,
        é necessário arquivos externos contendo as informações de acesso e,
        consequentemente, as respostas do código
      </p>
      <h3>open()</h3>
      <p>
        Para ler os dados de um arquivo, deve-se acessá-lo com a função open(),
        a qual abre o arquivo informado e armazena essa “conexão” em uma
        variável para ser utilizada no código. Essa função possui dois
        parâmetros: o caminho onde está o arquivo que se deseja ler e escrever
        as informações; e o tipo de operação que se deseja executar. Existem
        três tipos de operações: “r”: leitura; “w”: escrita; “a”: escrita
        concatenar.
      </p>
      <h3>Caminho Inválido</h3>
      <p>
        Se um arquivo inexistente for passado na função open(), duas ocasiões
        podem ocorrer: caso a operação seja de escrita, o arquivo será criado em
        um caminho específico; e caso a operação seja de leitura, um erro
        aparecerá indicando que o arquivo não existe.
      </p>
      <h3>Close()</h3>
      <p>
        O método close() é aplicado após os dados serem criados no arquivo.
        Assim, sem necessitar de parâmetro, ele garante que o arquivo não será
        modificado por outros pontos do código.
      </p>
      <h3>Write()</h3>
      <p>
        Os dados podem ser escritos usando a função write() quando o arquivo
        está aberto em modo de escrita. Ela é uma função bem simples, pois basta
        passar o texto que deseja para o arquivo.
      </p>
      <p>
        No exemplo, um arquivo de texto está sendo criado, com o título
        “aula_escrita.txt”. Após isso, o texto hello world é inserido nesse
        arquivo e o código é fechado. No entanto, caso a operação tenha sido de
        concatenar (“a”), nenhuma informação prévia seria perdida. E as novas
        informações seriam inseridas logo após a última linha de texto escrito
        no arquivo.
      </p>
      <h3>read() e readlines()</h3>
      <p>
        A função read() lê todas as informações que estão presentes no arquivo.
        Porém, ela armazena todas de uma vez só, o que torna o acesso confuso.
        Como evolução, há a função readlines(), a qual pega as informações já
        agrupadas por linha, o que facilita a leitura e o entendimento.
      </p>
      <p>
        O exemplo tem um código simples onde os votos executados são colocados
        em um laço de repetição. Vale lembrar que é necessário saber a estrutura
        do arquivo. No exemplo, o arquivo de votos, basicamente, só possui o seu
        número e cada linha representa um novo voto.
      </p>
      <h3>Conclusão</h3>
      <p>
        Apesar de parecerem simples, a leitura e escrita em arquivos são de suma
        importância na programação. Com os exercícios, ficará mais evidente a
        possibilidade de automatização desses programas. Além disso, na próxima
        aula, será trabalhado a evolução dessas técnicas e novas bibliotecas que
        auxiliam na manipulação de arquivos.
      </p>
    </>
  );
};

export default OpLeitura;
