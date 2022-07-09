import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container_home}>
      <h1 className={styles.title}>Olá!</h1>
      <p className={styles.text}>
        Essa aplicação desenvolvida com <span>ReactJS</span> foi criada para
        realizar minhas anotações referentes ao curso de Front End ofertado pela
        Softex!<br/>
        Além disso, pretendo praticar minhas habilidades com ReactJS, aliando a
        teoria com a prática dos conhecimentos adquiridos ao longo do curso!
      </p>
    </div>
  );
};

export default Home;
