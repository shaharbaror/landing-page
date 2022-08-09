import styles from "./Page.module.css";

const Page = (props) => {
  const imageStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${props.image})`,
  };

  return (
    <div>
      <div className={styles["text-div"]} style={imageStyle}>
        <div className={styles['title-margin']}/>
        <div className={styles.paragraph}>
          <h2 >{props.title}</h2>
          <p>{props.p}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
