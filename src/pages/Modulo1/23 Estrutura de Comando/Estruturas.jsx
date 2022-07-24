const Estruturas = () => {
  return (
    <>
      <h2>Estruturas de Comandos Lógicos de Decisão</h2>
      <p>
        Durante o desenvolvimento de um algoritmo, podem haver momentos em que o
        caminho do código mudará, dependendo do resultado adquirido ou da
        situação. Para escolher qual caminho seguir, são utilizadas estruturas
        de decisão, as quais são as situações “se…então”, ou seja, as escolhas
        que podem ser feitas durante a execução do código.
      </p>
      <p>
        Utilizando o exemplo básico da receita de cobertura de bolo, essas
        estruturas de condição seriam: coloque 100 g de granulado; SE não houver
        granulado ENTÃO; coloque 200 g de chocolate ralado. Por mais simples que
        possa parecer, essa simples adição já torna a receita mais genérica.
        Pois, é possível utilizar dois ingredientes diferentes para a
        finalização da cobertura.
      </p>
      <p>
        Os operadores, principalmente os relacionais e os lógicos, são muito
        utilizados na construção dessas condições. Por exemplo, no código da
        média do aluno: media = (nota1 + nota2) / 2 se (media {">"}= 7) então a.
        Aprovado se (media {"<"} 7) então a. Reprovado ​ Após obter a média do
        aluno, o programa analisa se (condição) a média dele foi maior que ou
        igual a sete. Caso essa operação seja verdadeira, o aluno é aprovado,
        caso seja falsa, ele é reprovado.
      </p>
      <p>
        No exemplo anterior, foram aplicadas duas condições e só uma será
        executada, são elas: a média maior ou igual a sete; e a média menor que
        sete. Ou seja, se a média do aluno for maior ou igual a sete, ele está
        aprovado, senão, está reprovado. O termo senão é utilizado na
        programação para facilitar a compreensão dos comandos.
      </p>
      <p>
        E se a ação possuir mais de duas possibilidades? Nem sempre será
        possível simplesmente aplicar vários “se”, pois isso pode acarretar
        alguns problemas. O próximo exemplo apresenta um pseudocódigo que recebe
        a média do aluno como entrada e armazena a categoria de nota como
        letras.
      </p>
      <p>
        De início, “C” aparenta ser o valor armazenado na variável mediaLetra,
        mas, na quinta linha, a condição também é verdadeira, pois o valor da
        variável media é maior que sete. Então, o valor armazenado na variável
        seria “D” . Isso acontece pois todos os “se” são independentes, sendo
        necessário inseri-los em uma condição para que apenas um deles seja
        executado. Para isso, é utilizado o “senão se”.
      </p>
      <p>
        Os operadores lógicos também podem ser utilizados nas estruturas
        condicionais. Com eles, as condições ficam mais estruturadas e trabalham
        em situações complexas. Por exemplo, uma outra forma de executar o
        pseudocódigo anterior seria adicionando outra condição nos “se”,
        definindo o limite superior da nota. Dessa forma, temos:
      </p>
      <p>
        Assim, o problema comentado anteriormente não ocorreria, mesmo se não
        fossem utilizados os “senão se”. As condições que serão colocadas e como
        elas serão estruturadas dependerá do problema que está sendo
        solucionado.
      </p>
      <p>
        Todos os comandos que foram utilizados em pseudocódigo existem na
        linguagem Python. Se converter o pseudocódigo para Python, fica: Se
        CONDIÇÃO então {"->"} if CONDIÇÃO : Senão se CONDIÇÃO então {"->"} Elif
        CONDIÇÃO : Senão {"->"} Else : Os dois pontos significam o “então” e
        precisam ser inseridos. Todos os comandos dentro do “if” precisam ser
        indentados, pois a Python é uma linguagem indentada.
      </p>
      <p>
        nota = 4 <br /> if (nota {"<"} 4): <br /> print("Reprovado") <br /> elif
        (nota {"<"} 7): print("Em recuperação")
        <br /> elif(nota {">="}7):
        <br /> print("Aprovado")
      </p>
    </>
  );
};

export default Estruturas;
