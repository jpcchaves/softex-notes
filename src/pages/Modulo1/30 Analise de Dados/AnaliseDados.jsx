const AnaliseDados = () => {
  return (
    <>
      <h2>Panda (Análise de Dadoss)</h2>
      <p>
        Quanto mais complexo os dados se tornam e maiores os arquivos ficam,
        mais inviável é a estratégia de dados manualmente
      </p>
      <h3>Panda</h3>
      <p>
        Para contornar essa situação, diversas bibliotecas foram criadas, como a
        Panda
      </p>
      <p>
        Essa lib é feita para leitura e manipulaçao de base de dados, tabelas e
        aquivos CSV
      </p>
      <p>
        Essa lib é muito usada na área de ciência de dados, não só na leitura e
        escrita de arquivos, mas também para limpeza e análise dos dados
      </p>
      <p>
        Ex: remover colunas que não são interessantes para o projeto e realizar
        operações matemáticas com os dados
      </p>
      <p>
        O Pandas é a ferramenta ideal para abrir e mexer em planilhas usando a
        Python. Digamos que precisamos ler e analisar uma tabela que contém as
        fichas de funcionários de uma empresa. Nesta ficha, existem informações
        como Nome, Documentos, Idade, Qtde de Atvd Realizadas. No nosso exemplo,
        a análise não precisa utilizar a coluna com os documentos dos
        funcionários. Então, podemos remover esses dados. Com o restante das
        colunas, podemos fazer, por exemplo, uma média de idade dos funcionários
        desta empresa. Ou até mesmo descobrir qual funcionário realizou mais
        atividades no mês
      </p>
      <h3>Como usar o Pandas</h3>
      <p>
        É necessário instalá-lo utiliando o <strong>Pip Install Pandas</strong>
      </p>
      <p>
        Para ler um arquivo, basta usar o comando{" "}
        <code> read_csv("nome do arquivo")</code>
      </p>
      <h3>Leitura de Bases de Dados</h3>
      <p>
        No vídeo dessa aula, foi desenvolvido um exemplo básico de como ler um
        dataframe pela pandas através da função pd.read_csv(). Porém, outra
        função muito comum de leitura é a pd.read_excel(). Ela lê arquivos
        .xlsx, uma extensão geralmente usada para arquivos gerados pelo Excel. A
        biblioteca pandas possui vários tipos de funções de leituras. Aqui vamos
        falar sobre os mais comuns.
      </p>
      <h3>Acesso aos valores da base</h3>
      <p>
        Como um dataframe é uma planilha, é possível acessar os valores pelas
        suas colunas. Se estiver lendo um dataframe que possui a coluna “id”,
        basta acessar df[“id”] para observar todos os seus ids. Também é
        possível determinar a linha desejada colocando mais um par de colchetes,
        como na imagem. Essa estrutura, onde o dataframe é armazenado, é
        basicamente um array. Esse assunto não será aprofundado neste curso, mas
        o básico para entender os dataframes será apresentado.
      </p>
      <h3>Operações Matemáticas</h3>
      <p>
        As operações matemáticas são mais fáceis de serem executadas usando a
        pandas. Por exemplo, há uma coluna “valor” no dataframe, na qual valores
        serão divididos por dez e seus resultados serão inseridos em uma nova
        coluna “novo_valor”. Com a pandas, essa operação é muito simples de ser
        executada. Para criar uma nova coluna, basta colocar o nome dela no
        dataframe para receber o valor. Só é necessário fazer isso em uma linha.
      </p>
      <h3>Funções matemáticas</h3>
      <p>
        Na pandas, é possível realizar algumas funções matemáticas interessantes
        e simples de entender. Algumas dessas são: .sum() é usada para somar
        todos os valores da coluna; .median() é usada para tirar a média dos
        valores da coluna; .max() e .min() são usadas para indicar os valores
        máximos e mínimos, respectivamente.
      </p>
      <h3>Seleção de Valores</h3>
      <p>
        Até o momento, só é possível criar e atualizar valores em todas as
        linhas do dataframe. No entanto, caso queira atualizar apenas linhas
        específicas, de acordo com alguma condição, deve-se utilizar a função
        .loc[], cuja estrutura é dataframe.loc[CONDICAO, COLUNA]. No exemplo, o
        valor “ADULTO” deve ser inserido apenas nas linhas da coluna “situacao”
        que possuem o valor “idade” maior ou igual a dezoito anos. Nos outros
        casos, o valor “CRIANCA” é preenchido.
      </p>
      <h3>Salvar</h3>
      <p>
        Após as avaliações serem feitas e os valores desejados serem
        adicionados, é preciso salvar o dataframe. O salvamento é feito com a
        função .to_csv() no formato .csv. Depois, basta inserir o caminho onde
        deseja que o arquivo seja salvo como parâmetro. Outro parâmetro da
        função .to csv() é o “index” , ele cria uma nova coluna com o index das
        linhas. Uma prática comum é atribuir False para esse parâmetro já que a
        adição de uma coluna de index não seja necessária na tabela. Esses
        parâmetros também se aplicam à função to_excel().
      </p>
      <h4>Praticando</h4>
      <p>
        Problema: Uma escola precisa de um programa que leia as tabelas de notas
        dos alunos, como a da imagem. Ajude essa escola e crie um código que
        calcule a média do aluno e informe sua situação acadêmica. Os critérios
        de aprovação são: média maior ou igual a 7: “Aprovado”; média menor que
        7: “Reprovado”.
      </p>
      <h4>Resolução</h4>
      <p>
        Solução:{" "}
        <code>
          import pandas as pd <br />
          df = pd.read_csv
          <br />
          ("notas_alunos.csv")
          <br /> media = (df["nota_1"] + df["nota_2"]) / 2 <br />
          if(media {">="} 7): <br />
          print("Aprovado") <br />
          elif(media {"<"} 7):
          <br /> print("Reprovado")
        </code>
      </p>
      <hr />
    </>
  );
};

export default AnaliseDados;
