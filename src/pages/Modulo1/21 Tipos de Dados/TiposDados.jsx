const TiposDados = () => {
  return (
    <>
      <h2>Tipos de Dados constantes e variáveis</h2>
      <h3>Variáveis</h3>
      <p>
        São valores ou resultados que são armazenados na programação para
        utilizar esses dados no futuro e evitar erros.
      </p>
      <p>
        Variáveis são os ingredientes dos bolos, portanto, é importante saber
        quantidade de cada ingrediente e a unidade de medida que foi utilizada.
      </p>
      <p>
        Quantidade = Valores <br /> Unidade de medida = tipos{" "}
      </p>
      <p>
        A seguir, as variáveis e os tipos para identificação serão inseridos no
        exemplo. Início float nota1 = valor da primeira nota do aluno; float
        nota2 = valor da segunda nota do aluno; float res_soma = nota1 + nota2;
        float res_media = res_soma / 2; Se res_media for maior que sete então: O
        aluno foi aprovado; Se não: O aluno foi reprovado; Fim
      </p>
      <p>
        Na maioria das linguagens, é preciso declarar o tipo do valor que será
        inserido na variável, porém, isso não acontece na linguagem Python, pois
        ela tem um nível de adaptabilidade maior. Então, a variável assumirá o
        tipo correspondente ao valor inserido nela. Esse recurso torna essa
        linguagem mais simples, o que não prejudica o estudo e a compreensão das
        variáveis, pois você só consegue desenvolver o código se entender esses
        conceitos. Exemplo: JavaScript {"->"} var numero = 5 Python {"->"}{" "}
        numero = 5
      </p>
      <p>
        Para compreender melhor os tipos de variáveis, você deve praticar alguns
        comandos em Python. No seu espaço de codificação desejado, escreva o
        código a seguir.
      </p>
      <br />
      <code>
        numero_inteiro = 5 numero_float = 5.7 texto = “este é um texto” booleano
        = False print(“Este é um tipo”) print(type(numero_inteiro)) print(“Este
        é um tipo”) print(type(numero_float)) print(“Este é um tipo”)
        print(type(texto)) print(“Este é um tipo”) print(type(booleano))
      </code>
      <p>
        A função type() em Python informa o tipo da variável que está sendo
        inserida. Então, esse código mostra na tela, através do comando print(),
        os tipos das variáveis criadas, sendo apresentados em sequência int,
        float, string e boolean.
      </p>
      <p>
        É possível alterar os tipos das variáveis, pois eles não são definidos
        na Python. Por exemplo: variavel = 5 print(“primeiro tipo”)
        print(type(variavel)) variavel = “texto” print(“segundo tipo”)
        print(type(variavel)) Nesse código, é possível observar que a mesma
        variável, inicialmente do tipo int, se tornou do tipo string. Isso
        ocorre devido à tipagem automática da Python.
      </p>
      <p>
        Utilize o código a seguir para praticar alguns testes com valores das
        variáveis. Se você trocar o valor da variável que fica acima do código,
        automaticamente, todas as vezes em que ela aparecer, estará com esse
        valor que você definiu. Assim, o código fica mais organizado. Caso uma
        variável não fosse utilizada, seria necessário alterar seu valor em
        todos os lugares.
      </p>
      <hr />
    </>
  );
};

export default TiposDados;
