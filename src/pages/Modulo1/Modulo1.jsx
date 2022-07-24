// CSS
import styles from "../Modules.module.css";
// Módulos
import Logica from "./01 Logica/Logica";
import Raciocinio from "./02 Raciocinio/Raciocinio";
import Computacional from "./03 Pensamento Computacional/Computacional";
import Algoritmo from "./04 Algoritmo/Algoritmo";
import ConceitosLogica from "./05 Conteitos Logica/ConceitosLogica";
import Dados from "./06 Entrada e Saida de Dados/Dados";
import Expressoes from "./07 Expressões Lógicas/Expressoes";
import Condicional from "./08 Estrutura Condicional/Condicional";
import Repeticao from "./09 Estrutura de Repetição/Repeticao";
import BubbleSort from "./10 BubbleSort/BubbleSort";
import QuickSort from "./11 QuickSort/QuickSort";
import Insertion from "./12 InsertionSort/Insertion";
import Alocacao from "./13 Alocação/Alocacao";
import EstrutuArq from "./14 Estrutura de Arquivos/EstrutuArq";
import Abstratos from "./15 TiposAbstratos/Abstratos";
import Grafos from "./16 Grafos/Grafos";
import Arvores from "./17 ArvoresDeBusca/Arvores";
import ConceitosBasicos from "./18 ConceitosBasicos/ConceitosBasicos";
import Programacao from "./19 Introdução a Programação/Programacao";
import TiposAlg from "./20 Tipos de Repretensação/TiposAlg";
import TiposDados from "./21 Tipos de Dados/TiposDados";
import Operadores from "./22 Tipos de Operadores/Operadores";
import Estruturas from "./23 Estrutura de Comando/Estruturas";

const Modulo1 = () => {
  return (
    <div className={styles.module_container}>
      <Logica />
      <Raciocinio />
      <Computacional />
      <Algoritmo />
      <ConceitosLogica />
      <Dados />
      <Expressoes />
      <Condicional />
      <Repeticao />
      <BubbleSort />
      <QuickSort />
      <Insertion />
      <Alocacao />
      <EstrutuArq />
      <Abstratos />
      <Grafos />
      <Arvores />
      <ConceitosBasicos />
      <Programacao />
      <TiposAlg />
      <TiposDados />
      <Operadores />
      <Estruturas />
    </div>
  );
};

export default Modulo1;
