import styles from "./Display.module.css";

function Display({ ab }) {
  return (
    <>
      <input
        type="text"
        id="inptval"
        value={ab}
        readOnly
        className={styles.display}
      />
    </>
  );
}

export default Display;
