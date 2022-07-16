import React from "react";

const EstrutuArq = () => {
  return (
    <>
      <h2>Estrutura de Arquivos</h2>
      <p>
        Os arquivos são conjuntos de registros. Esses registros podem ser
        armazenados em dispositivos físicos, como Disco, CD, Pendrive e HD.
      </p>
      <p>
        A identificação do arquivo é formada por duas partes: Nome . Extensão
      </p>
      <p>
        Exemplo: <br />
        <code>Arquivo.exe</code>
        <br />
        <code>Arquivo.obj</code>
        <br />
        <code>Arquivo.mp3</code>
        <br />
        <code>Arquivo.js</code>
      </p>
      <p>Existem dois tipos de arquivos: Sequencial e Aleatório</p>
      <h3>Sequencial</h3>
      <p>Os arquivos são lidos na mesma ordem que foram escrito</p>
      <h3>Aleatório</h3>
      <p>Os dados podem ser lidos e escritos em qualquer ordem </p>
      <h3>Dispositivos de Armazenamento Externo</h3>
      <p>
        Tem como vantagens o maior espaçoi de armazenamento e a persistência de
        dados
      </p>
      <p>Desvantagens: alterações, inclusões e comparativos lentos. </p>
      <p>
        Quando o dado está sendo processado, ele fica armazenado temporariamente
        na memória ram, já os dispositivos de armazenamento externo são para
        dados que não estão sendo processados.
      </p>
      <h3>Como manipulá-los?</h3>
      <h4>O que podemos fazer com esses arquivos?</h4>
      <p>Podemos consultar, inserir e modificar ou removê-los</p>
      <p>
        Ou seja, consultar e manipulações são básicas. Consultar, inserir,
        modificar ou elimitar dados.
      </p>
      <h3>Gerência de Arquivos</h3>
      <p>
        Buscar, classificar, alterar, adicionar, excluir, copiar e realizar a
        alocação e desalocação de arquivos são as funções do gerenciamento de
        arquivos.
      </p>
      <p>
        O seu objetivo é organizar por meio de ações diretas, evitando a busca
        de dados desnecessários. O grande obstáculo é a otimização do tempo para
        o acesso para a organização dos dados.
      </p>
      <h3>Estrutura de Arquivos</h3>
      <p>
        A estrutura dos arquivos visa diminuir o número de acessos ao disco,
        ganhar tempo, processar o que for necessário e ampliar a quantidade de
        informações em apenas um acesso.
      </p>
      <h3>Tipos</h3>
      <p>
        Os dois tipos de arquivos são os de formatos variáveis e os de
        registros.{" "}
        <p>
          Arquivos de formatos variáveis: não são organizados em estrutura e são
          considerados arquivos sequenciais, por exemplo, um texto;
        </p>{" "}
        <p>
          Arquivos de registros: são organizados em unidades de tamanho fixo
          maiores que um byte.
        </p>
      </p>
      <h3>Indexação</h3>
      <p>
        Para identificar um arquivo, o campo chave é utilizado. Ele fica no
        índice, ou index, o qual mantém os endereços dos arquivos. Existem os
        índices primário e secundário.
        <p>
          <strong>Índice primário</strong>: considera o campo mais importante e
          organiza o arquivo a partir dele;
        </p>{" "}
        <p>
          <strong>Índice secundário</strong>: organiza o arquivo referenciando o
          campo ou combinando os campos.
        </p>
      </p>
      <h3>Arquivos Sequenciais</h3>
      <p>
        A leitura do arquivo acontece de forma sequencial, ou seja, um após o
        outro. A ordenação é realizada pela chave primária, que organiza o
        arquivo pelo campo da chave. A vantagem disso é a rapidez em acessar um
        arquivo ordenado. No entanto, excluir ou adicionar um arquivo fica mais
        trabalhoso.
      </p>
      <hr />
    </>
  );
};

export default EstrutuArq;
