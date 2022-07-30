const Poo = () => {
  return (
    <>
      <h2>Historia da POO</h2>
      <p>
        A Programação Orientada a Objetos (POO) é um paradigma de programação
        que tem como base o conceito de objetos, os quais podem conter atributos
        e métodos. A POO foi invetada na década de 1970 pelo matemático e
        biólogo Alan Kay, mas se tornou popular na década de 1990 devido à
        influência da linguagem de programação C++. Atualmente, muitas
        linguagens de programação já têm suporte para a Programação Orientada à
        Objetos, algumas delas são JavaScript, Python, PHP, Ruby.
      </p>
      <h3>Intuito da POO</h3>
      <p>
        A POO foi criada com o objetivo de facilitar a programação e aproximar a
        lógica dos códigos ao mundo em que vivemos, tornando mais prático e
        usual para qualquer tipo de software. Assim, ela considera que tudo que
        existe é um objeto, podendo ser ele material ou abstrato. Por exemplo:
        um mouse, uma casa e uma moto são materiais; já uma música e uma
        transação bancária são abstratos.
      </p>
      <p>
        Esse paradigma vem sendo cada vez mais inserido no desenvolvimento de
        softwares, pois há diversas características positivas na sua utilização.
        A seguir, serão apresentadas algumas.
      </p>
      <h3>Lógica da POO</h3>
      <h4>Confiável</h4>
      <p>
        A divisão das partes do software o torna mais seguro, gerando
        independência no código. Logo, as partes não são afetadas quando
        mudadas. Exemplo: um objeto “Relógio” possui um objeto “Pilha” dentro
        dele e eles trabalham em conjunto, mas o relógio não depende de uma
        pilha específica, pois ela pode ser modificada inúmeras vezes e o
        relógio continuará funcionando normalmente.
      </p>
      <h4>Oportuno</h4>
      <p>
        Devido à divisão das partes do software e à independência entre elas, os
        códigos podem ser criados em paralelo, deixando o processo mais ágil.
        Exemplo: o “Relógio” e a “Pilha” não precisam ser criados em uma ordem,
        eles podem ser desenvolvidos de forma paralela, pois a criação de um não
        depende da do outro.
      </p>
      <h4>Ajustável</h4>
      <p>
        Ao realizar alguma manutenção em uma parte do código, todas as outras
        serão beneficiadas automaticamente. Exemplo: ao realizar o ajuste da
        “Pilha” do “Relógio” por uma de qualidade superior, tanto a “Pilha”
        quanto o “Relógio” serão beneficiados.
      </p>
      <h4>Extensível</h4>
      <p>
        O software não é estático, ele deve se manter em desenvolvimento para
        seguir com utilidade. Dessa forma, não é preciso criar algo com
        funcionalidades similares, pois o software pode ser facilmente estendido
        e aprimorado. Exemplo: a empresa fabricante de relógios está interessada
        em produzir um novo relógio com mais funcionalidades, mas por ser um
        produto extensível, a ação mais recomendada e econômica é apenas seguir
        com o relógio existente e adicionar novas funcionalidades a ele.
      </p>
      <h4>Reutilizável</h4>
      <p>
        O objeto de um sistema pode ser utilizado em outros sistemas, desde que
        tenham compatibilidade. Exemplo: um objeto “Veículo” pode ser
        reutilizado em outros softwares, desde que haja “Veículos” na sua
        estrutura. Tanto uma concessionária como um estacionamento podem usar o
        objeto “Veículo”.
      </p>
      <h4>Natural</h4>
      <p>
        Um dos pontos mais importantes na POO é o foco na realidade, visando
        sempre a simplicidade da compreensão. Assim, a programação ganha
        naturalidade e facilita conversas e resoluções de problemas.
      </p>
      <h3>POO vs PE</h3>
      <p>
        É possível entender a lógica da Programação Orientada à Objetos após a
        compreensão das suas seis vantagens. Diferente da Programação
        Estruturada (PE), que é recomendada para a resolução de um problema
        específico, a POO é muito utilizada na criação de sistemas mais
        complexos, pois entrega melhores resultados nesses tipos de programas.
        Ambas têm lados positivos e negativos, portanto suas utilizações vão
        depender de cada caso.
      </p>
      <hr />
    </>
  );
};

export default Poo;
