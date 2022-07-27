const Erros = () => {
  return (
    <>
      <h2>Tratamento de Erro e Exceção</h2>
      <p>
        Como os dados são inseridos pelo usuário, a probabilidade de erros
        aumenta drasticamente. Mesmo se o seu programa espere que o usuário
        digite um número, ele pode digitar um texto. No entanto, mesmo sem a
        interação com o usuário, erros podem acontecer.
      </p>
      <h3>Tratamento de Erros</h3>
      <p>
        Por exemplo, na função calculadora, o usuário poderia tentar fazer a
        operação de divisão com o número zero, isso é um problema aritmético que
        ocasiona outros erros. Uma solução seria não inserir o valor zero como
        parâmetro, mas o objetivo da função é ser genérica, estar preparada para
        executar o seu objetivo e contornar a situação de erro.
      </p>
      <h3>Resolução de Erros com IF</h3>
      <p>
        Alguns desses erros podem ser resolvidos com uma condição. Um if, por
        exemplo, pode prevenir muitos problemas. No caso da calculadora, a
        adição de mais uma condição na operação de divisão para checar se o
        segundo número é diferente de zero, resolve o problema.
      </p>
      <p>
        Percebe-se que o código já possui um tratamento de erro, pois ele
        retornaria o valor “0” caso nenhuma das opções possíveis fossem
        preenchidas. Porém, “0” também pode ser um resultado válido. Então,
        lembrando que a Python tem tipagem dinâmica, é possível retornar uma
        mensagem de erro ao invés de um número.
      </p>
      <p>
        No novo exemplo, há uma condição no código principal que checa se o
        resultado da função é um erro ou não. Portanto, é possível adaptar cada
        vez mais esse erro. É possível ter uma mensagem de erro caso seja uma
        operação indevida ou uma divisão por zero. Existe uma forma de
        padronizar esses códigos através de uma estrutura chamada de enum
        (enumeradores), porém, essa estrutura será trabalhada depois.
      </p>
      <h3>Exceptions</h3>
      <p>
        O uso da condição if auxilia no tratamento de erros, mas, em alguns
        casos, não é possível utilizá-lo ou seu uso tornaria o código mais
        complicado de ser desenvolvido. Por exemplo, ao tentar converter o input
        do usuário para um número inteiro. Não há como checar antes se o valor é
        um número de fato ou se é um texto, só depois que o erro acontece,
        então, nesse caso, é impossível utilizar um if para resolver o problema.
      </p>
      <h3>Estrutura Exceptions</h3>
      <p>
        As estruturas de exceção, exceptions, são utilizadas para tratar erros
        inesperados que podem aparecer durante o código. Elas possuem a seguinte
        estrutura: <strong>try: CODIGO except CODIGO</strong>{" "}
      </p>
      <p>
        No exemplo, o código solicita que seja inserido um número e, caso não
        seja colocado um número inteiro, ele apenas retorna que não foi digitado
        um número e nenhum erro é mostrado. Todo o código presente dentro do try
        é executado e, se algum erro dentro dele acontecer, o código,
        automaticamente, executará o que estiver dentro do except.
        Resumidamente, o código tentará fazer tudo, exceto se algo ocorrer de
        errado
      </p>
      <p>
        Caso você tenha o interesse de averiguar o erro, é possível mostrar na
        tela adicionando o texto except Exception as e: ao invés de apenas
        except:. Assim, uma variável é criada com o erro que foi executado. Vale
        destacar que a forma como o erro é mostrado é diferente de quando o
        código é executado sem o try exception. Mesmo mostrando o erro, o código
        não para de rodar, ele apenas mostra a mensagem.
      </p>
      <h3>Raise Exceptions</h3>
      <p>
        Também é possível levantar (raise) uma exceção (exception) manualmente.
        Essa ideia é interessante para deixar o código mais organizado e tornar
        as execuções dos erros mais genéricas, cada um com sua própria
        descrição. Sua estrutura é: raise Exception(DESCRICAO)
      </p>
      <p>
        No exemplo da imagem, a função calculadora está aprimorada para que
        exista o erro de divisão por zero e o erro de sem operação. Então, é
        necessário colocar o try except no código principal, para que o sistema
        informe qual erro ocorreu.
      </p>
      <p>
        A classe usada, exception, é o tipo mais genérico de erro, mas existem
        outros na Python. Na realidade, o tratamento de exceção é um tema mais
        profundo e detalhado do que o trabalhado aqui. Pois, em cada linguagem,
        existem tipos de erros básicos e hierarquias diferentes que permitem uma
        melhor organização e execução do código.
      </p>
      <p>
        No entanto, como este é um curso introdutório, só será abordado esse
        nível. Se desejar ter um pouco mais de conhecimento, você pode olhar a
        documentação da Python sobre exceção.
      </p>
      <h3>Praticando</h3>
      <p>
        Problema: Desenvolva um programa que só deve aceitar números pares. Siga
        as seguintes instruções: caso um número ímpar seja digitado, informe ao
        usuário que ele digitou um valor ímpar e peça novamente por um número
        par; caso uma letra seja digitada, informe ao usuário que ele digitou um
        caractere inválido e peça novamente por um número par.
      </p>
      <h4>Solução</h4>
      <p>
        <code>
          Solução: numeroCorreto = False <br />
          while (numeroCorreto == False): <br />
          print("Insira um número par")
          <br /> try: numero = int(input()) <br />
          if (numero%2 == 0):
          <br /> numeroCorreto = True
          <br />
          print("Você digitou um numero par !") <br />
          else : print("Você digitou um número impar")
          <br /> except: print("Caracter inválido, por favor digite um número
          par")
        </code>
      </p>
      <hr />
    </>
  );
};

export default Erros;
