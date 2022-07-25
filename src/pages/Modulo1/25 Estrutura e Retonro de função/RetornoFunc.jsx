const RetornoFunc = () => {
  return (
    <>
      <h2>Estrutura e Retorno Função</h2>
      <h3>Funções</h3>
      <p>
        Vale relembrar que os laços de repetição são usados para repetir blocos
        de código que necessitam ser executados mais de uma vez. Porém, é muito
        comum que esses blocos apareçam mais de uma vez no código. Um bom
        exemplo é na letra de músicas, onde o refrão se repete em diversos
        momentos. No entanto, na letra, ele não é escrito completo em todas as
        suas repetições, apenas o termo “refrão”. Essa separação é basicamente o
        funcionamento de uma função na programação.
      </p>
      <p>
        Funções são blocos de códigos que executarão uma parte específica do
        código. Existem duas razões para utilizá-las: evitar repetição - as
        funções são utilizadas em mais de um lugar do código, então elas evitam
        a repetição e facilitam o entendimento do código; encapsulamento - cada
        função tem uma tarefa específica e, geralmente, seu nome remete a isso.
        Assim, quando alguém ler o código, entenderá o que e como será feito.
      </p>
      <p>
        Por exemplo, se uma função media() estiver no meio do código, é
        entendido que ela pega dois ou mais valores e gera a média deles, ou
        seja, é possível entender o significado sem precisar ver a função.
      </p>
      <p>
        Então, as funções na programação são semelhantes às funções matemáticas,
        pois são chamadas no meio da equação, possuem uma execução e retornam um
        valor final.
      </p>
      <h3>Estrutura da Função</h3>
      <p>
        A estrutura de uma função é composta por três elementos. Nome da função:
        é interessante ter um nome que defina a tarefa da função. Por ele que a
        função é chamada no meio do código; Parâmetros: é necessário informar
        quais valores serão utilizados na função, pois eles podem ser usados de
        acordo com a situação, ficando diferentes; Resposta (retorno): a função
        deve retornar o resultado da sua operação ao terminar a execução.
      </p>
      <h3>Na Python</h3>
      <p>
        Na linguagem Python, a estrutura da assinatura da função é “def
        NOME_FUNCAO (PARAMETROS):” e vale lembrar da indentação da Python. No
        fim da função, há a palavra-chave return que determina o valor que será
        retornada de toda a função. No exemplo, tem uma função que executa a
        média de duas notas de um aluno e retorna o resultado dessa função. O
        nome da função é media_aluno e ela possui dois parâmetros, nota1 e
        nota2. A função coloca o valor da média dos dois valores na variável
        media, que é o resultado da função.
      </p>
      <h3>Variáveis globais e locais</h3>
      <p>
        Percebe-se que não precisa informar parâmetros nas funções, basta
        colocar as variáveis no código principal e usar o mesmo nome dentro da
        função, o que facilita em projetos pequenos. As variáveis que podem ser
        acessadas por todo o código são chamadas de variáveis globais, mas seu
        uso excessivo não é uma boa prática.
      </p>
      <p>
        Neste curso, estão sendo trabalhados projetos pequenos e simples em um
        único arquivo. Porém, grandes projetos de programação são bem mais
        complexos e utilizam vários arquivos. O uso descontrolado de variáveis
        globais pode prejudicar o funcionamento do código, pois a alteração do
        valor de uma variável é capaz de afetar todo o desenvolvimento do
        sistema, já que não é possível manter controle das mudanças. Ao enviar
        um valor como parâmetro na função, ele se torna uma variável local e
        passa a ser acessada somente dentro da função, não prejudicando o
        funcionamento do resto do sistema.
      </p>
      <h3>Impressão nas Funções (print)</h3>
      <p>
        É muito comum encontrar exemplos na internet para imprimir o resultado
        dentro da própria função através da função print(). Porém, essa não é
        uma boa prática. O objetivo das funções é, apenas, executar um
        procedimento e retornar o resultado. É interessante mostrar na tela, o
        resultado no bloco principal do código. Isso permite que a função seja
        mais genérica e evita que ela fique presa no formato que foi programado.
      </p>
      <p>
        Inicialmente, essa prática parece não ter sentido, mas é recomendado
        exercê-la, pois facilita o desenvolvimento. Por exemplo, se o código não
        precisar imprimir, for utilizado junto a outro sistema e mostrar as
        informações em outro programa, não será necessário modificar a função e
        o código principal, o novo código só precisa utilizar o resultado e, se
        o print() estiver apenas no código principal, essa alteração é feita
        mais facilmente.
      </p>
      <h3>Retorno da Função</h3>
      <p>
        Na linguagem Python, é possível retornar mais de um valor na função,
        basta separar os valores por vírgula quando for receber o valor do
        retorno, assim como no código principal. No exemplo, há um código
        simples, que pega o valor passado no parâmetro e retorna seus números
        antecessor e sucessor. Perceba o uso da vírgula no retorno da função e
        no re
      </p>
      <h4>Funções Nativas</h4>
      <p>
        Cada linguagem também possui funções próprias que podem ser utilizadas
        pelos programadores. Na Python, existem: print(), range() e randint().
        Destaca-se a importância de ter os parâmetros da range() passados pela
        função ao invés de retirar do código. Além de ver o encapsulamento
        dessas funções, mesmo sem entender seus funcionamentos, conhecer o
        objetivo de cada uma delas é o necessário para desenvolver.
      </p>
      <h4>Praticando</h4>
      <p>
        Problema: João precisa calcular seu Índice de Massa Corporal (IMC) para
        avaliar seu peso ideal. Sabendo que a fórmula para calcular o IMC é:
        peso ÷ altura², crie um programa que calcule e informe a classificação
        do IMC.
      </p>
      <p>
        <code>
          Solução: def calculadoraImc(peso, altura): <br /> imc =
          peso/(altura*altura) * 10000 <br /> if (imc {"<="} 18.5): return
          "Magreza" <br />
          elif (imc {">"} 18.5) and (imc {"<="} 24.9): return "Saudavel" <br />
          elif (imc {">="} 25) and (imc {"<="} 29.9): return "Sobrepeso" <br />
          elif (imc {">"} 30) and (imc {"<="} 34.9): return "Obesidade grau 1"{" "}
          <br />
          elif (imc {">"} 35) and (imc {"<="} 39.9): return "Obesidade severa
          grau 2" <br />
          else : return "Obesidade morbida grau 3" <br />
          peso = 60 <br />
          altura = 160
          <br />
          resultado = calculadoraImc(peso,altura) print(resultado)
        </code>
      </p>
      <hr />
    </>
  );
};

export default RetornoFunc;
