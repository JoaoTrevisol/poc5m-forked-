import Ney from "./components/ney";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Ney
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzd3Nxx_iINSa4tqub6B7BviE4e_1GdO95A&s"
        text="Bom dia do Ney!!!"
      />
      <Ney
        url="https://pbs.twimg.com/media/EQYCkTlUUAEcHSz?format=jpg&name=small"
        text="Ney careca! (continua lindo)"
      />
      <Ney
        url="https://i.pinimg.com/736x/8f/4e/bc/8f4ebc7e95103e91ba8a4924b021b671.jpg"
        text="Ney, o último romântico! S2"
      />
    </main>
  );
}
