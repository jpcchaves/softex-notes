// CSS
import styles from "../Modules.module.css";
// Módulos
import Logica from "./01 Logica/Logica";
import Raciocinio from "./02 Raciocinio/Raciocinio";

const Modulo1 = () => {
  return (
    <div className={styles.module_container}>
      <Logica />
      <Raciocinio />
    </div>
  );
};

export default Modulo1;
