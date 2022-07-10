// CSS
import styles from "../Modules.module.css";
// Módulos
import Logica from "./01 Logica/Logica";
import Raciocinio from "./02 Raciocinio/Raciocinio";
import Computacional from "./03 Pensamento Computacional/Computacional";
import Algoritmo from "./04 Algoritmo/Algoritmo";
import ConceitosLogica from "./05 Conteitos Logica/ConceitosLogica";

const Modulo1 = () => {
  return (
    <div className={styles.module_container}>
      <Logica />
      <Raciocinio />
      <Computacional />
      <Algoritmo />
      <ConceitosLogica />
    </div>
  );
};

export default Modulo1;
