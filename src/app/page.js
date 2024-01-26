import Image from "next/image";
import style from "./page.module.css";
import Pokemon from "./components/Pokemon135"

export default function Home() {
  return (
    <div className={style.main}>
      <Pokemon/>
    </div>
  );
}
