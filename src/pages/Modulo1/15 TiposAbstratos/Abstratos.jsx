import React from "react";

const Abstratos = () => {
  return (
    <>
      <h2>Tipos Abstratos de Dados</h2>
      <p>
        O tipo abstrato de dados tenta desvincular o tipo de dado de sua
        implementação
      </p>
      <p>
        Imagine um código onde existem várias funções, como Listar, Criar,
        Excluir e Buscar. Se formos criar um novo código, teríamos que refazer
        todas as funções.
      </p>
      <p>
        Portanto, quando trabalhamos com um tipo abstrato de dados, nós queremos
        utilizar apenas as suas funções, sem se preocupar com a sua real
        atuação.
      </p>
      <p>
        Exemplo: Controle Remoto. Nele temios vários botões: volume, canal,
        ligar e desligar. Como usuários,precisamos apenas clicar no botão para
        que ele ative a sua função, sem se preocupar com o que acontece por
        trás.
      </p>
      <p>
        Utilizando uma linguagem POO, precisamos definir uma nova classe e nela
        criar os elementos que são a Interface e os Atributos
      </p>
      <p>Exemplo: classe agenda</p>
      <p>
        <br />
        <code>
          class agenda: <br />
          Nome = "" <br />
          Numero = "" <br />
          <br />
          function NovoNumero(): <br />
          cad = Cliente() <br />
          cad.nome = input('Digite o nome') <br />
          cad.Numero = input('Digite o Numero') <br />
          return cad
        </code>
      </p>
      <p>
        No exemplo acima, com a classe criada, sempre que fizermos uma varíavel
        receber o tipo dessa classe, ele gerdará automaticamente todas as
        funções implementadas nessa classe.
      </p>
      <p>
        É importante lembrar de importar o caminho onde a classe foi criada nos
        códigos em que usaremos as funções: <br />
        <code>from "caminho" import *</code>
      </p>
      <p>
        Com a classe importada, podemos utilizar o código. Os tipos abstratos
        ajudam na reutilização do código, basta apenas a pessoa criar função
        print para usarmos em todos os nossos códigos sem a necessidade de
        criá-los do zero.{" "}
      </p>
    </>
  );
};

export default Abstratos;
