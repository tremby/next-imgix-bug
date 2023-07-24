import styles from './page.module.css'
import Imgix from "react-imgix";

export default function Home() {
  return (
    <main className={styles.main}>
      <Imgix src="https://assets.imgix.net/examples/pione.jpg" />
    </main>
  )
}
