// CSS
import styles from "../Modules.module.css";
// Módulos
import Logica from "./01 Logica/Logica";
import Raciocinio from "./02 Raciocinio/Raciocinio";
import Computacional from "./03 Pensamento Computacional/Computacional";
import Algoritmo from "./04 Algoritmo/Algoritmo";
import ConceitosLogica from "./05 Conteitos Logica/ConceitosLogica";
import Dados from "./06 Entrada e Saida de Dados/Dados";

const Modulo1 = () => {
  return (
    <div className={styles.module_container}>
      <Logica />
      <Raciocinio />
      <Computacional />
      <Algoritmo />
      <ConceitosLogica />
      <Dados />
    </div>
  );
};

export default Modulo1;
