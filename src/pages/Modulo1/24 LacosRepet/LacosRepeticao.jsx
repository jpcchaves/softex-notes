const LacosRepeticao = () => {
  return (
    <>
      <h2>Laços de Repetição</h2>
      <p>Na programação, existem dois laços de repetição: o for e o while.</p>
      <h3>For</h3>
      <p>
        Este é o laço de repetição mais utilizado na programação e só pode ser
        utilizado com um contador. Sua estrutura varia para cada linguagem,
        porém, só é necessário definir o nome da variável (o contador) o valor
        utilizado na parada e se o contador terá um incremento ou um decremento.
      </p>
      <p>
        No exemplo, percebe-se um comando for feito na linguagem C. O contador é
        a variável i, que será iniciado em 0 e incrementado. A operação ocorrerá
        enquanto a variável i for menor que 10. Como inicia em 0, o comando será
        executado dez vezes.
      </p>
      <p>
        Na Python, o operador é mais simples e, muitas vezes, é utilizado com
        outra função dessa linguagem, a range(). Ela gera o incrementador,
        assim, só é necessário passar o número limite.
      </p>
      <p>
        No exemplo, percebe-se que o código em Python é semelhante ao mostrado
        em C. Observe a estrutura do comando na Python:{" "}
        <code>for VARIAVEL in range(LIMITE):</code>
        Os dois pontos (:) são necessários e todos os comandos que serão
        executados dentro do laço precisam estar indentados.
      </p>
      <p>
        Por padrão, a função range() inicia em 0 e vai incrementando em 1 até o
        valor determinado, que é o critério de parada. Também, é possível
        adicionar outras opções, parâmetros, na função range().
      </p>
      <p>
        Iniciar por outro valor que não seja 0: range(2, 10) começa no número 2
        e para quando chegar em 10, incremento em 1;
      </p>
      <p>
        Mudar o incrementador: range(0, 10, 2) começa no número 0 e para quando
        chega em 10, porém, com o incrementador de 2 em 2;
      </p>
      <p>
        Redução e não incremento: range(10, 0, -1) começa a partir do 10 e para
        quando chega em 0, reduzindo de 1 em 1.
      </p>
      <p>
        O range() é uma função Python, na qual é necessário apenas colocar os
        parâmetros desejados, que ela funcionará corretamente. Para mudar apenas
        o incrementador, deve-se colocar os três valores (início, limite e
        incrementador). Caso contrário, a Python não entenderá e executará
        incorretamente.
      </p>
      <p>
        Exemplo, se colocar range(10, 2) no lugar de range(0, 10, 2), a Python
        compreenderá que o contador começará com 10 e para em 2 com incremento
        em 1. Nesse caso, nada acontecerá, pois 10 não é menor que 2, logo, a
        condição nunca será executada.
      </p>
      <h3>While</h3>
      <p>
        O laço while é mais genérico, pois ele permite outros tipos de repetição
        quando necessário. Então, os comandos que estiverem no bloco while serão
        executados enquanto a condição for verdadeira. Sua estrutura na Python é
        while condição:.
      </p>
      <p>
        No exemplo, tem um código que mostrará na tela números aleatórios entre
        1 e 10. Este comando será repetido até que o número aleatório seja 5. A
        função utilizada para gerar os números foi a randint().
      </p>
      <p>
        Também é possível utilizar o while da mesma forma que o for, porém, é
        necessário incrementar ou diminuir o contador manualmente, tal qual como
        o exemplo da contagem feita com while. Como na maioria das vezes são
        repetições que usam um contador, o for é mais utilizado que o while.
      </p>
      <p>
        Este comando é semelhante ao while comum, mas ele garante que o código
        seja executado no mínimo uma vez, fazendo a checagem no final da
        execução.
      </p>
      <p>
        No exemplo, o contador inicia em 0 e, a partir daí, vai aumentando.
        Porém, a condição depende se o contador for maior que 0. No while comum,
        esse laço nunca seria executado, pois é checado antes de rodar. Já no no
        do while não tem problema, pois seria executado pelo menos uma vez para
        depois ser checado. Como o contador iria aumentar, a repetição ocorreria
        normalmente. O exemplo está na linguagem C, pois esse comando não existe
        na Python.
      </p>
      <h3>Palavras Chave (Break e Continue)</h3>
      <p>
        Existem algumas palavras-chave que auxiliam na execução dos laços.
        break: interrompe todo o laço que está em execução. Geralmente, é usado
        junto com um if adicional para condições específicas; continue: finaliza
        a execução atual do laço e move para a próxima. Geralmente, é usado
        quando não se deseja mais executar uma parte do código.
      </p>
      <p>
        No exemplo, há um código que executa as duas palavras-chave. O código
        deveria ser executado dez vezes e mostrar na tela um número, que inicia
        em 10 e vai aumentando de 2 em 2. Porém, não é mostrado na tela quando o
        número é 14 por conta do continue, o qual fez o ciclo encerrar naquele
        momento, sem interromper o laço inteiro. Já quando o número é igual a
        20, o laço é interrompido por conta do comando break, finalizando o
        código antes do esperado.
      </p>
      <h4>Exemplo</h4>
      <p>
        Problema: João começou a se exercitar na academia e foi instruído por
        seu personal trainer a descansar exatamente por 45 segundos entre os
        exercícios, porém ele sempre excede esse tempo. Crie um programa que
        mostre o progresso desse intervalo em segundos e que avise sobre quando
        o tempo de descanso terminar.
      </p>
      <p>
        Solução:
        <code>
          import time <br /> tempoInicial = 1<br /> tempoFinal = 45 <br />
          print("Iniciando descanso...") <br />
          for i in range(tempoInicial,tempoFinal+1): <br />
          print(i) time.sleep(1) <br />
          print("Fim do descanso!")
        </code>
      </p>
    </>
  );
};

export default LacosRepeticao;
