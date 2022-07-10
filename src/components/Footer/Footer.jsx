import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Site desenvolvido por{" "}
        <a href="https://www.linkedin.com/in/joaopaulo-chaves/" target="_blank">
          <span className={styles.my_name}>João Paulo</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
