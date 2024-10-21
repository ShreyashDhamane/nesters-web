import styles from "pages/Home/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.introSection}>
      <div className={styles.curverLayer}></div>
      <div className={styles.innerDivIntroSection}>
        <div className={styles.leftInnerDiv}>
          <h3>Create Your Affordable Student Living Experience</h3>
          <h4>Find Roommates</h4>
          <h4>Sublet Apartment</h4>
          <h4>Student Marketplace</h4>
          <p>
            Moving to a new country can be challenging—we know because we've
            been in your shoes. Nesters is here to help you save money while
            finding roommates, apartments, and essential items.
          </p>
          <h5>~ Built For Students, By Students</h5>
          <button>Learn More</button>
        </div>
        <div className={styles.rightInnerDiv}></div>
      </div>
    </div>
  );
};

export default Home;
