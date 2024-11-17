import styles from "./ButtonContainer.module.css";

function ButtonsContainer({ eventhandler }) {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonName.map((buttonName) => (
          <button
            value={buttonName}
            onClick={() => eventhandler(buttonName)}
            key={buttonName}
            className={styles.button}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonsContainer;
