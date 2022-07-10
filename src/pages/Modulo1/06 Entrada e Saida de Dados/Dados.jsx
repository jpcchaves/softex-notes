import React from "react";

const Dados = () => {
  return (
    <>
      <h2>Entrada e Saída de Dados</h2>
      <p>
        Como solicitar dados? Muitas vezes precisamos de dados para completar
        determinadas informações.
        <p>
          Exemplo: Qual o saldo final de uma pessoa ao fazer um depósito? Nessa
          questão, precisaríamos de dados externos, como o{" "}
          <strong>Valor do Depósito e Valor do Saldo Anterior</strong>
        </p>
      </p>
      <p>
        No nosso contidiano, nós nos comunicamos uns com os outros, realizamos
        perguntas, recebemos respostas e finalizamos conversas
      </p>
      <p>
        No caso do algoritmo, a comunicação será com o usuário que esta usando
        naquele momento, em uma interface apropriada para isso e escondendo o
        código executado e apresentando apenas o que é interessando para o
        usuário ver.
      </p>
      <p>
        Para simular uma conversa entre o usuário e o algoritmo, é necessário
        mostrar uma mensagem na interface para o usuário responder quando for
        solicitado.
        <strong>
          {" "}
          Essas falas e respostas são representadas por comandos, que são
          entrada e saída.
        </strong>
      </p>
      <h3>Comando de Saída</h3>
      <p>
        É responsável por transmitir uma mensagem d computador para o usuário.
        Podendo ser uma pergunta ou só informando uma resposta. Para utilizar o
        comando de saída, devemos utilizar a palavra "escreva" e colocar entre
        parênteses e entre aspas o texto que deve ser apresentado ao usuário.{" "}
        <br />
        Exemplo:
        <code>
          {" "}
          <p>escreva("Olá mundo!")</p>
        </code>{" "}
        <br />
        Se for apresentada apenas uma variável, ela deve ficar foda das aspas.{" "}
        <br />
        Exemplo:{" "}
        <code>
          <p>nome recebe CARACTERE</p>
          <p>var nome = "JOÃO"</p>
          <p>escreva("TEXTO EXEMPLO", nome)</p>
        </code>
      </p>
      <h3>Comando de Entrada</h3>
      <p>
        Para dar continuidado na execução do algoritmo, o usuário deve inserir
        algo de acordo com o que foi solicitado pelo programa.
      </p>
      <p>
        Se foi solicitado um valor inteiro, é necessário que o usuário insira um
        valor inteiro para que o algoritmo receba esse dado.
      </p>
      <p>
        Representamos o valor de entrada através da palavra:{" "}
        <code>
          <p>
            <strong>leia</strong>
          </p>
        </code>
        Logo em seguida informamos entre parênteses a variável que será
        armazenada a resposta do usuário
      </p>
      <p>
        Com essas novas informações, o algoritmo passa a ser realizado em{" "}
        <strong>blocos ou etapas</strong>, sendo iniciado pelas variáveis com
        seu identificados e seu tipo. Depois os comandos de entrada e saída caso
        seja necessário. Com isso, é feito todo o processo do algoritmo para ser
        finalizado com o resultado ou a resposta do algoritmo.
      </p>
      <hr />
    </>
  );
};

export default Dados;
