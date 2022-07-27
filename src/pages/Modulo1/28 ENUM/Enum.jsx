const Enum = () => {
  return (
    <>
      <h2>Uso básico do ENUM</h2>
      <p>
        Vimos como podemos controlar possíveis erros através de códigos os
        valores que representam qual erro foi ocasionado
      </p>
      <p>
        Porém, existe outra forma de ordenação desses códigos que permite um
        padrão e uma melhor organização
      </p>
      <h3>Enum</h3>
      <p>
        É basicamente um grupo de constantes onde é definido um valor e uma
        descrição para cada valor estabelecido
      </p>
      <p>
        <code>
          import enum <br />
          class erro_calculadora(enum.Enum)
          <br />
          err_divisao_zero = 1<br />
          err_sem_op = 2 <br />
          err = 3
        </code>
      </p>
      <p>
        É possível fazer um processo semelhante utilizando valores simples para
        os erros
      </p>
      <p>
        Porém, esses valores poderimam ser confundidos com os resultados reais
        da calculadora
      </p>
      <p>
        O enum permite que o valor não seja confundido por outro valor no código
      </p>
      <p>
        Como solução, podemos utilizar o próprio texto do erro. Porém, buscamos
        ter ua organização e um entendimento melhor no código. Além disso, o
        enum permite que apenas os valores previamente estabelecidos possam ser
        utilizados
      </p>
      <p>O enum é uma classe na python</p>
      <hr />
    </>
  );
};

export default Enum;
