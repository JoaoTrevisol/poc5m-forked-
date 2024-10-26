import styles from "./ney.module.css";

export default function Ney({ url, text }) {
  return (
    <figure className={styles.ney}>
      <img alt={text} src={url} />
      <figcaption>{text}</figcaption>
    </figure>
  );
}

